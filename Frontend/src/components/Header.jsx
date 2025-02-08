import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex mx-5 flex-col items-wrap  md:flex-row  bg-[#5f6FFF] rounded  relative md:mx-5 md:mt-3'>
            <div className='md:w-1/2 flex flex-col justify-center  items-start  p-10 lg:pd-20 gap-2'>
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                    Book Appointments With Trusted Doctors
                </p>

                <img className="w-48 h-auto" src={assets.group_profiles} alt="Group Profiles" />

                <p className='text-white'>Million users book daily... try right now</p>

                <div className="flex flex-row gap-1 bg-stone-100 w-[180px] p-2 rounded-full text-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <a href="#speciality">Book appointments</a>
                    <img src={assets.arrow_icon} alt="Arrow Icon" />
                </div>
            </div>

            <div className='md:w-1/2 flex items-end'>
                <img className='w-full h-auto rounded-lg' src={assets.header_img} alt="Header Image" />
            </div>


        </div >
    )
}

export default Header
