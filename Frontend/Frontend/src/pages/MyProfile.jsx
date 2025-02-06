import React, { useState } from 'react'
import { assets } from '../assets/assets'


const MyProfile = () => {
  const [userData, setuserData] = useState({
    name: 'Edward Vincent', image: assets.profile_pic,
    email: 'edwardvincent@gmail.com',
    phone: '+91 99999999',
    address: {
      line1: 'defency coloy',
      line2: 'Crcle,chrdjoidjofdi'
    },
    gender: 'Male',
    dob: '2000-01-03'
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='flex justify-center my-5'>
      <div>
        <div className='max-w-lg flex flex-col gap-2 text-sm p-5 sm:p-10 border rounded-lg shadow-lg'>
          <img src={userData.image} className='w-36 rounded-full' />
          {
            isEdit ? <input className='text-3xl font-medium mt-4 max-w-60 bg-gray-50 pl-5' type="text" value={userData.name} onChange={e => setuserData(prev => ({ ...prev, name: e.target.value }))} /> : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
          }
          <hr className='bg-zinc-400 h-[1px] border-none' />
          <div>
            <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
              <p className='font-medium'>email id:</p>
              <p className='text-gray-500 pl-5'>{userData.email}</p>
              <p className='font-medium'>Phone</p>
              {
                isEdit ? < input className='bg-gray-100 max-w-52 pl-5' type="text" value={userData.phone} onChange={e => setuserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className='text-gray-500 pl-5'>{userData.phone}</p>
              }
              <p className='font-medium'>Address</p>
              {
                isEdit ?
                  <p>
                    <input className='bg-gray-50 pl-5' type="text" value={userData.address.line1} onChange={e => setuserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                    <br />
                    <input className='bg-gray-50 pl-5' type="text" value={userData.address.line2} onChange={e => setuserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
                  </p> :
                  <p className='text-gray-500 pl-5'>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
              }

            </div>
          </div>
          <div>
            <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
            <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 '>
              <p className='font-medium'>Gender:</p>
              {
                isEdit ? <select className='max-w-20 bg-gray-100 pl-5' value={userData.gender} onChange={e => setuserData(prev => ({ ...prev, gender: e.target.value }))}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select> : <p className='text-gray-400 pl-5'>{userData.gender}</p>
              }
              <p className='font-medium'>Birdthday:</p>
              {
                isEdit ? <input value={userData.dob} onChange={e => setuserData(prev => ({ ...prev, dob: e.target.value }))} type="date" className='max-w-37 bg-gray-100 px-5' /> : <p className='text-gray-400 pl-5'>{userData.dob}</p>
              }
            </div>
          </div>
          <div className='mt-10 '>
            {
              isEdit ?
                <button className='border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transtion-all duration-300' onClick={() => setIsEdit(false)}>Save information</button> :
                <button onClick={() => setIsEdit(true)} className='border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transtion-all duration-300'>Edit</button>
            }
          </div>

        </div>
      </div>

    </div>


  )
}

export default MyProfile