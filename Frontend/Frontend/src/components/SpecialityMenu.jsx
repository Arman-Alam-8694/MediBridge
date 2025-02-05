import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div id="speciality" className='flex flex-col items-center gap-4 justify-center py-16 text-gray-800'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-sm text-center'>
                Simply browse through our extensive list of trusted doctors, schedule your appointment
            </p>
            <div className='flex flex-row flex-wrap gap-4 justify-center px-4'>
                {specialityData.map((item, index) => (
                    <Link
                        onClick={() => scrollTo(0, 0)}
                        className='flex flex-col justify-center items-center text-sm cursor-pointer hover:-translate-y-[10px] transition-all duration-500 w-24 sm:w-32'
                        key={index}
                        to={`/doctor/${item.speciality}`}
                    >
                        <img
                            className='w-14 sm:w-24 mb-2'
                            src={item.image}
                            alt={item.speciality}
                        />
                        <p className='text-[10px] sm:text-sm text-center leading-tight'>
                            {item.speciality}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;