import { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState(true)
    // const [showmenu, setShowmenu] = useState(false)
    return (
        <div className='flex items-center text-sm justify-between  py-4 border-b border-gray-400 md:mx-5' >
            <img className=" w-30 ml-4 sm:w-44 cursor-pointer" src={assets.logo} alt=" " />
            <ul className='text-[11px] sm:text-sm flex gap-4 items-start font-medium'>
                <NavLink to="/">
                    <li className='py-1' >HOME</li>
                    <hr className='outline-none border-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to="/doctor">
                    <li className='py-1' >ALL DOCTORS</li>
                    <hr className='outline-none border-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to="/about">
                    <li className='py-1' >ABOUT</li>
                    <hr className='outline-none border-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'></hr>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1' >CONTACT</li>
                    <hr className='outline-none border-none h-0.5 bg-gray-500 w-3/5 m-auto hidden'></hr>
                </NavLink>

            </ul>
            <div className='flex items-center '>
                {
                    token ?
                        <div className="flex items-center gap-1 group relative">
                            <img className="w-10 rounded-full" src={assets.profile_pic} alt="" />
                            <img className="w-2.5 mr-2" src={assets.dropdown_icon} alt="" />

                            {/* Dropdown menu with transition */}
                            <div className="absolute top-1 right-1 pt-14 font-light text-base text-gray-600 opacity-0 invisible transition-all duration-300 ease-in-out transform scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 z-20">
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col p-4 shadow-md">
                                    <p className="hover:text-black hover:bg-gray-200 cursor-pointer" onClick={() => navigate('myprofile')}>MyProfile</p>
                                    <p className="hover:text-black hover:bg-gray-200 cursor-pointer" onClick={() => navigate('myappointment')}>MyAppointment</p>
                                    <p className="hover:text-black hover:bg-gray-200 cursor-pointer" onClick={() => setToken(false)}>Logout</p>
                                </div>
                            </div>
                        </div>

                        :
                        <button onClick={() => (navigate('/login'))} className=' primary w-auto px-4 py-2 rounded-full   mr-4 '>Create Account</button>
                }
            </div>
        </div>
    )
}

export default Navbar