import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
    const { doctors, getAllDoctors, aToken, toggleAvailability } = useContext(AdminContext)
    useEffect(
        () => {
            if (aToken) {
                getAllDoctors()
            }
        }, [aToken])
    return (
        <div>
            <p className='mx-5 mt-5 text-lg font-medium'>DOCTORS LIST</p>
            <div className='mx-5 max-h-[90vh] overflow-y-scroll hide-scrollbar '>

                <div className='flex w-full flex-wrap gap-4 pt-5' >
                    {doctors.map((item, index) => (
                        <div key={index} className='border border-indigo-200 rounded-xl max-w-50 overflow-hidden cursor-pointer group'>
                            <img src={item.image} className='bg-indigo-100 group-hover:bg-[#5f6FFF] transition-all duration-500' />
                            <div className='p-4'>
                                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                                <p className='text-zinc-600 text-sm'>{item.speciality}</p>
                                <div className='mt-2 flex items-center gap-1 text-sm'>
                                    <input onChange={() => toggleAvailability(item._id)} type='checkbox' checked={item.availability} />
                                    <p>Available</p>
                                </div>

                            </div>


                        </div>

                    ))}

                </div>

            </div>
        </div>

    )
}

export default DoctorsList