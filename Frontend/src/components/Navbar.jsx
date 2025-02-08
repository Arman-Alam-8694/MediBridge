import { useRef, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropIcons = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropIcons.current && !dropIcons.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex items-center text-sm justify-between py-4 border-b border-gray-400 md:mx-5">
            <img onClick={() => navigate("/")} className="w-30 ml-4 sm:w-44 cursor-pointer" src={assets.logo} alt=" " />
            <ul className="hidden sm:flex text-[11px] sm:text-sm gap-4 items-start font-medium">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/doctor">ALL DOCTORS</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </ul>

            <div className="flex items-center">
                {token ? (
                    <div className="relative flex items-center gap-1" ref={dropIcons}>
                        {/* Profile Icon (Click & Hover) */}
                        <img
                            onClick={toggleDropdown}
                            className="w-10 rounded-full cursor-pointer"
                            src={assets.profile_pic}
                            alt=""
                        />
                        <img
                            onClick={toggleDropdown}
                            className="w-2.5 mr-2 cursor-pointer"
                            src={assets.dropdown_icon}
                            alt=""
                        />

                        {/* Dropdown Menu (Click: Fast Transition, Hover: Slow Transition) */}
                        <div
                            className={`absolute top-10 right-0 min-w-48 bg-stone-100 rounded flex flex-col p-4 shadow-md transition-all ease-in-out gap-2 transform z-20 
              ${isDropdownOpen ? "duration-100 opacity-100 visible scale-100" : "duration-300 opacity-0 invisible scale-95"}`}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <p className="hover:text-black hover:bg-gray-200 cursor-pointer" onClick={() => navigate("myprofile")}>
                                MyProfile
                            </p>
                            <p className="hover:text-black hover:bg-gray-200 cursor-pointer" onClick={() => navigate("myappointment")}>
                                MyAppointment
                            </p>
                            <p
                                className="hover:text-black hover:bg-gray-200 cursor-pointer"
                                onClick={() => {
                                    navigate("login");
                                    setToken(false);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                Logout
                            </p>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate("/login")} className="primary w-auto px-4 py-2 rounded-full mr-4">
                        Create Account
                    </button>
                )}

                {/* Mobile Menu */}
                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className="w-6 sm:hidden mr-5 cursor-pointer" />
                <div className={`${showMenu ? "fixed w-full h-full" : "h-0 w-0"} sm:hidden overflow-hidden right-0 top-0 z-20 bg-white`}>
                    <div className="flex items-center justify-between px-5 py-6">
                        <img onClick={() => { setShowMenu(false); navigate("/"); }} className="w-36 cursor-pointer" src={assets.logo} />
                        <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <NavLink onClick={() => setShowMenu(false)} to="/">HOME</NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/doctor">ALL DOCTORS</NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">ABOUT</NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/contact">CONTACT</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
