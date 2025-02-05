import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctor = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through below</p>

            {/* Flex container with wrapping and centering */}
            <div className='w-full flex flex-wrap justify-center gap-4 pt-5 gap-y-6 px-3'>
                {
                    doctors.slice(0, 6).map((item, index) => (
                        <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border overflow-hidden border-blue rounded-xl hover:-translate-y-2 transition-all duration-500 
                min-w-[150px] flex-shrink  max-w-[200px]'
                            key={index}
                        >
                            <img className='bg-blue-50 w-full' src={item.image} />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                </div>
                                <p>{item.name}</p>
                                <p>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


            <button onClick={() => { navigate('/doctor'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full'>more</button>
        </div>
    )
}

export default TopDoctor
