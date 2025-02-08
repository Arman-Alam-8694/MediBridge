import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, doc_id }) => {
    const { doctors } = useContext(AppContext)
    const [relDoc, setrelDoc] = useState([])
    const navigate = useNavigate()

    const getRelatedDoctorData = () => {
        if (doctors.length > 0 && speciality) {
            const relDocData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== doc_id)
            setrelDoc(relDocData)

        }

    }
    useEffect(() => {
        getRelatedDoctorData()


    }, [doctors, speciality, doc_id])
    return (
        <div className='flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Recommended Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through below</p>

            {/* Flex container with wrapping and centering */}
            <div className='w-full flex flex-wrap justify-center gap-4 pt-5 gap-y-6 px-3'>
                {
                    relDoc.slice(0, 5).map((item, index) => (
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
        </div>
    )
}

export default RelatedDoctors