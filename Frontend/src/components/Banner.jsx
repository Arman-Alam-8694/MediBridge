
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#5f6FFF] flex rounded-lg pl-6 sm:pl-10 md:pl-14 my-20 mx-5 md:mx-10 max-h-[350px] relative'>
            {/* --left-side */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 z-10 pr-[40%] sm:pr-[35%] md:pr-[30%] lg:pr-[25%]'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='mt-6 px-6 py-2 bg-white text-[#5f6FFF] rounded-full font-semibold hover:scale-110 transition-all duration-300'>
                    Create Account
                </button>
            </div>
            {/* --right-side */}
            <div className='absolute bottom-0 right-0 h-[120%] '>
                <img
                    className='h-full w-full object-contain'
                    src={assets.appointment_img}
                    alt="Appointment"
                />
            </div>
        </div>
    );
};

export default Banner;