import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets.js";
import { doctors } from "../../../../Frontend/src/assets/assets.js";
import { AdminContext } from "../../context/AdminContext.jsx";
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("");
    const [about, setAbout] = useState("");
    const [degree, setDegree] = useState("");
    const [fees, setFees] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [speciality, setSpeciality] = useState('General Physician');


    const { backendUrl, aToken } = useContext(AdminContext);

    const setters = {
        name: setName,
        email: setEmail,
        password: setPassword,
        experience: setExperience,
        fees: setFees,
    };



    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error('Profile image is not inserted');
            }

            const formData = new FormData();
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('about', about);
            formData.append('degree', degree);
            formData.append('fees', Number(fees));
            formData.append('speciality', speciality);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });

            if (data.success) {
                toast.success(data.message);
                toast.success(data.message)
                setDocImg(false)
                setName("")
                setEmail("")
                setPassword("")
                setExperience("")
                setAbout("")
                setDegree("")
                setFees("")
                setAddress1("")
                setAddress2("")
                setSpeciality('General Physician')


            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="min-h-screen w-full flex-col items-start justify-start bg-indigo-50 p-5 gap-2 ">
            <p className="text-xl font-semibold text-gray-700 pb-3">Add Doctor</p>
            <div className="bg-white shadow-lg rounded-lg px-5 pb-5 w-full max-w-3xl">

                {/* Upload Profile Section */}
                <div className="flex items-center gap-3 py-4">
                    <label htmlFor="uploadProfile" className="cursor-pointer flex items-center gap-3">
                        <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} className="w-16 object-cover rounded-full bg-indigo-200 " alt="Profile" />
                        <span className="text-gray-600">EDIT PROFILE PICTURE</span>
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} id="uploadProfile" type="file" hidden />
                </div>

                {/* Main Form Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Left Side - Doctor Details */}
                    <div className="flex flex-col gap-4">
                        {["name", "email", "password", "experience", "fees"].map((key, index) => (
                            <div key={index}>
                                <label className="block text-gray-600 capitalize" htmlFor={`doctor-${key}`}>
                                    {key}
                                </label>
                                <input
                                    onChange={(e) => setters[key](e.target.value)}

                                    value={{
                                        name, email, password, experience, fees
                                    }[key]}
                                    className="border border-gray-500 rounded-md p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none focus:bg-indigo-100"
                                    placeholder={key}
                                    type="text"
                                    id={`doctor-${key}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Address & Speciality */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-600" htmlFor="doctor-speciality">
                                Speciality
                            </label>
                            <select
                                onChange={(e) => setSpeciality(e.target.value)}
                                className="border border-gray-500 rounded-md p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none focus:bg-indigo-100"
                                id="doctor-speciality"
                                value={speciality}
                            >
                                <option className='bg-white' value="General Physician">General Physician</option>
                                <option className='bg-white' value="Gynecologist">Gynecologist</option>
                                <option className='bg-white' value="Dermatologist">Dermatologist</option>
                                <option className='bg-white' value="Pediatricians">Pediatricians</option>
                                <option className='bg-white' value="Neurologist">Neurologist</option>
                                <option className='bg-white' value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="doctor-education">
                                Education
                            </label>
                            <input
                                onChange={(e) => setDegree(e.target.value)}
                                className="border border-gray-500 rounded-md p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none focus:bg-indigo-100"
                                type="text"
                                value={degree}
                                placeholder="Mbbs,etc,...."
                                id="doctor-education"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="doctor-address">
                                Address
                            </label>
                            <input
                                onChange={(e) => setAddress1(e.target.value)}
                                className="border border-gray-500 rounded-md p-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none focus:bg-indigo-100"
                                type="text"
                                value={address1}
                                id="doctor-address-1"
                                placeholder="Street Address"
                            />
                            <input
                                onChange={(e) => setAddress2(e.target.value)}
                                className="border border-gray-500 rounded-md p-2 text-sm w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none focus:bg-indigo-100"
                                type="text"
                                value={address2}
                                id="doctor-address-2"
                                placeholder="City, State, ZIP"
                            />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="mt-6">
                    <label className="block text-gray-600" htmlFor="doctor-about">
                        About
                    </label>
                    <textarea
                        onChange={(e) => setAbout(e.target.value)}
                        className="border focus:bg-indigo-100 border-gray-500 rounded-md p-2 text-sm w-full h-24 focus:outline-none focus:border-none"
                        id="doctor-about"
                        value={about}
                        placeholder="Write something about the doctor..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button type='submit' className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddDoctor;