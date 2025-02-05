import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

import clsx from 'clsx'

const Doctor = () => {
  const { speciality } = useParams()
  const navigate = useNavigate()
  const [filterDoc, setFilterDoc] = useState([])
  console.log(speciality)
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='flex mx-5 my-10 sm:mx-10'>
      <div className='flex flex-col text-center '>
        <p className='mb-2'>Browse through the doctors specialist</p>
        <div className='flex flex-col items-center justify-start gap-4'>
          <p
            onClick={() => (speciality === 'General physician' ? navigate('/doctor') : navigate('/doctor/General physician'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "General physician"
            })}
          >
            General Physician
          </p>
          <p
            onClick={() => (speciality === 'Gynecologist' ? navigate('/doctor') : navigate('/doctor/Gynecologist'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "Gynecologist"
            })}
          >
            Gynecologist
          </p>
          <p
            onClick={() => (speciality === 'Dermatologist' ? navigate('/doctor') : navigate('/doctor/Dermatologist'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "Dermatologist"
            })}
          >
            Dermatologist
          </p>
          <p
            onClick={() => (speciality === 'Pediatricians' ? navigate('/doctor') : navigate('/doctor/Pediatricians'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "Pediatricians"
            })}
          >
            Pediatricians
          </p>
          <p
            onClick={() => (speciality === 'Neurologist' ? navigate('/doctor') : navigate('/doctor/Neurologist'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "Neurologist"
            })}
          >
            Neurologist
          </p>
          <p
            onClick={() => (speciality === 'Gastroenterologist' ? navigate('/doctor') : navigate('/doctor/Gastroenterologist'))}
            className={clsx("border w-[150px] p-2 rounded-lg", {
              "bg-indigo-500 text-black": speciality === "Gastroenterologist"
            })}
          >
            Gastroenterologist
          </p>
        </div>
      </div>

      <div className='w-full flex flex-wrap justify-center gap-4 pt-5 gap-y-6 px-3'>
        {filterDoc.map((item, index) => (
          <div
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='border overflow-hidden h-[300px] border-blue rounded-xl hover:-translate-y-2 transition-all duration-500 
                    min-w-[150px] flex-shrink max-w-[200px]'
            key={index}
          >
            <img className='bg-blue-50 w-full ' src={item.image} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctor
