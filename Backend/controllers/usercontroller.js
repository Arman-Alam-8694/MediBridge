import validator from "validator"
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import { v2 as cloudinary } from "cloudinary"
import streamifier from "streamifier"
import dotenv from "dotenv"


export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.json({ success: false, Message: "Missing fields" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, Message: "Invalid email" })
        }
        if (password.length < 10) {
            return res.json({ success: false, Message: "weak password" })

        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = {
            name,
            email,
            password: hashedPassword
        }
        const newUserData = new userModel(newUser)
        const user = await newUserData.save()
        console.log('saved successfully')
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })




    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })

    }

}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: 'user doesnt exist' })

        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'invalid credentials' })
        }
        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, message: 'login successful', token })

    } catch (error) {
        return res.json({ success: false, message: error.message })

    }

}

export const getUserData = async (req, res) => {
    try {
        const id = req.body.id
        const user = await userModel.findById(id).select('-password')
        console.log(user)
        res.json({ success: true, user })

    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}

export const updateUser = async (req, res) => {
    try {
        const { id, email, phone, address, gender, dob } = req.body
        const imageFile = req.file
        if (!id || !email || !phone || !address || !gender || !dob) {
            return res.json({ success: false, message: 'missing fields' })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'invalid email' })
        }
        const addressObject = typeof address === 'string' ? JSON.parse(address) : address;
        const userData = await userModel.findByIdAndUpdate
            (id, {
                email,
                phone,
                address: addressObject,
                gender,
                dob
            })

        if (!userData) {
            return res.json({ success: false, message: 'user not found' })
        }
        const uploadImageCloudinary = (imageFile) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: 'image',
                        folder: 'users', // ✅ Uploads to "doctors" folder
                        public_id: `user_${Date.now()}`, // ✅ Unique name for the file
                        overwrite: true, // ✅ Ensures new uploads don't conflict
                        format: 'png' // ✅ Convert to PNG (optional)
                    },
                    (error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result.secure_url);
                        }
                    }
                );

                streamifier.createReadStream(imageFile.buffer).pipe(uploadStream);
            });
        };



        if (imageFile) {

            const imageUrl = await uploadImageCloudinary(imageFile)
            await userModel.findByIdAndUpdate(id, { image: imageUrl })
        }
        res.json({ success: true, message: 'user updated successfully' })




    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}                      