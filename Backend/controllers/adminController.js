import validator from "validator";
import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken"
import streamifier from "streamifier";

// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, about, fees, address, experience, available } = req.body;
        const imageFile = req.file;

        console.log({ name, email, password, speciality, degree, about, fees, address, experience }, { imageFile });

        // Check for missing fields
        if (!name || !email || !password || !speciality || !degree || !about || !address || !experience || !fees || !imageFile) {
            console.log("Missing Details")
            return res.status(400).json({ success: false, message: "Missing Details" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            console.log("email issue")
            return res.status(400).json({ success: false, message: "Invalid Email" });
        }

        // Validate password length
        if (password.length < 10) {
            console.log("password issue")
            return res.status(400).json({ success: false, message: "Weak password" });
        }

        // Hash password
        const saltRounds = 15;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        //upload image to cloudinary using the memoryStorage from multer and also using promise with upload_stream



        //here is the code for the upload
        const uploadImageCloudinary = (imageFile) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: 'image',
                        folder: 'doctors', // ✅ Uploads to "doctors" folder
                        public_id: `doctor_${Date.now()}`, // ✅ Unique name for the file
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

        const imageUrl = await uploadImageCloudinary(imageFile)
        console.log("here", imageUrl)

        // Upload image to Cloudinary
        // const imageUpload = await cloudinary.uploader.upload_stream( {
        //     resource_type: "image",

        // }); // ✅ Fixed `await`
        // const imageUrl = imageUpload.secure_url;

        // Prepare doctor data
        const doctorData = {
            name,
            email,
            password: hashedPassword,
            address,
            about,
            fees,
            experience,
            degree,
            speciality,
            date: Date.now(),          // ✅ Ensure it's included
            available,     // ✅ Ensure it's included
            image: imageUrl // ✅ Ensure it's included
        };

        // Save to MongoDB
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        console.log('heree')

        res.json({ success: true, message: "Doctor Added" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: 'invalid email or password' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });

    }
}


//API to get all the doctors in admin
const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')

        res.json({ success: true, doctors })



    } catch (error) {
        res.json({ success: false, message: error.message })

    }

}
export { addDoctor, loginAdmin, allDoctors };
