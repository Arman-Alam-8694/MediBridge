import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
const Sidebar = () => {
    const { aToken, setAToken } = useContext(AdminContext)
    return (
        <div className='bg-white border-r min-h-screen  '>{

            aToken && <ul className='mt-3 ml-2'>
                <NavLink className={({ isActive }) => (`flex items-center px-2 gap-2 py-3.5 md:px-9 md:min-w-72 ${isActive ? "bg-indigo-50 text-white border-r-3 border-[#5f6FFF]" : ""}`)} to='/admin-dashboard'>
                    <img src={assets.home_icon} />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink className={({ isActive }) => (`flex items-center px-2 gap-2 py-3.5 md:px-9 md:min-w-72 ${isActive ? "bg-indigo-50 text-white border-r-3 border-[#5f6FFF]" : ""}`)} to='/all-appointments'>
                    <img src={assets.appointment_icon} />
                    <p>Appointments</p>
                </NavLink>
                <NavLink className={({ isActive }) => (`flex items-center px-2 gap-2 py-3.5 md:px-9 md:min-w-72 ${isActive ? "bg-indigo-50 text-white border-r-3 border-[#5f6FFF]" : ""}`)} to='/add-doctor'>
                    <img src={assets.add_icon} />
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink className={({ isActive }) => (`flex items-center px-2 gap-2 py-3.5 md:px-9 md:min-w-72 ${isActive ? "bg-indigo-50 text-white border-r-3 border-[#5f6FFF]" : ""}`)} to='/doctor-list'>
                    <img src={assets.people_icon} />
                    <p>DoctorList</p>
                </NavLink>
            </ul>}
        </div>
    )
}

export default Sidebar