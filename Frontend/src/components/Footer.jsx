
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white text-gray-800 py-8 border-t border-gray-200 sm:ml-10'>
            <div className='container px-5 '>
                <div className='flex flex-col sm:flex-row gap-8 mb-8'>
                    {/* Logo and Description */}
                    <div className='flex-1'>
                        <img src={assets.logo} alt="Logo" className='w-24 mb-4' />
                        <p className='text-gray-600 text-sm leading-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequuntur exercitationem distinctio perferendis beatae libero molestiae sapiente sint natus sed, totam et, dolores sunt quia commodi nemo? Nam, facilis vitae?
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className='flex-1 flex justify-start sm:justify-end'>
                        <div className='flex flex-col'>
                            <h1 className='text-lg font-semibold mb-4 text-blue-600'>COMPANY</h1>
                            <p onClick={() => navigate('/')} className='text-gray-600 hover:text-blue-600 cursor-pointer mb-2'>Home</p>
                            <p onClick={() => navigate('/about')} className='text-gray-600 hover:text-blue-600 cursor-pointer mb-2'>About Us</p>
                            <p onClick={() => navigate('/contact')} className='text-gray-600 hover:text-blue-600 cursor-pointer mb-2'>Contact Us</p>
                            <p className='text-gray-600 hover:text-blue-600 cursor-pointer mb-2'>Privacy Policy</p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className='flex-1 flex justify-end'>
                        <div className='flex flex-col items-end'>
                            <h1 className='text-lg font-semibold mb-4 text-blue-600'>GET IN TOUCH</h1>
                            <p className='text-gray-600 mb-2'>+91 9283849787</p>
                            <p className='text-gray-600 break-words'>MediBridgesupport@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className='border-t border-gray-200 pt-6 text-center'>
                    <p className='text-gray-600 text-sm'>
                        Copyright © 2024 MediBridge - All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

//Gradient theme footer

// import React from 'react';
// import { assets } from '../assets/assets';

// const Footer = () => {
//     return (
//         <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8'>
//             <div className='container mx-auto px-5 sm:px-10'>
//                 <div className='flex flex-col sm:flex-row gap-8 mb-8'>
//                     {/* Logo and Description */}
//                     <div className='flex-1'>
//                         <img src={assets.logo} alt="Logo" className='w-24 mb-4' />
//                         <p className='text-gray-200 text-sm leading-6'>
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequuntur exercitationem distinctio perferendis beatae libero molestiae sapiente sint natus sed, totam et, dolores sunt quia commodi nemo? Nam, facilis vitae?
//                         </p>
//                     </div>

//                     {/* Company Links */}
//                     <div className='flex-1 flex justify-start sm:justify-end'>
//                         <div className='flex flex-col'>
//                             <h1 className='text-lg font-semibold mb-4'>COMPANY</h1>
//                             <p className='text-gray-200 hover:text-white cursor-pointer mb-2'>Home</p>
//                             <p className='text-gray-200 hover:text-white cursor-pointer mb-2'>About Us</p>
//                             <p className='text-gray-200 hover:text-white cursor-pointer mb-2'>Contact Us</p>
//                             <p className='text-gray-200 hover:text-white cursor-pointer mb-2'>Privacy Policy</p>
//                         </div>
//                     </div>

//                     {/* Contact Information */}
//                     <div className='flex-1 flex justify-end'>
//                         <div className='flex flex-col items-end'>
//                             <h1 className='text-lg font-semibold mb-4'>GET IN TOUCH</h1>
//                             <p className='text-gray-200 mb-2'>+91 9283849787</p>
//                             <p className='text-gray-200 break-words'>MediBridgesupport@gmail.com</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className='border-t border-gray-400 pt-6 text-center'>
//                     <p className='text-gray-200 text-sm'>
//                         Copyright © 2024 MediBridge - All Rights Reserved
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;