import { useContext } from "react"

import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
    const { doctors } = useContext(AppContext)
    return (
        <div className="mx-5">
            <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">MY APPOINTMENTS</p>
            <div>
                {
                    doctors.slice(0, 3).map((item, index) => (
                        <div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
                            <div>
                                <img className='w-32 bg-indigo-50' src={item.image} />

                            </div>
                            <div className="flex-1 text-sm text-zinc-600">
                                <p className="text-neutral-800 font-semibold">{item.name}</p>
                                <p className="">{item.speciality}</p>
                                <p className="text-zince-700 font-medium mt-1">Address</p>
                                <p className="text-xs">{item.address.line1}</p>
                                <p className="text-xs">{item.address.line2}</p>
                                <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date & Time </span>25,July ,2024 | 8.30 PM</p>
                            </div >
                            <div></div>
                            <div className="flex flex-col gap-2 justify-end">
                                <button className="text-sm text-stone-500 text-center sm:min-w-48 border py-2 border hover:bg-[#5f6FFF] hover:text-white transtion-all duration:300">PAY ONLINE</button>
                                <button className="text-sm text-stone-500 text-center sm:min-w-48 border py-2 border hover:bg-red-700 hover:text-white transtion-all duration:300">CANCEL APPOINTMENT</button>
                            </div>
                        </div>

                    ))
                }
            </div>


        </div>
    )
}

export default MyAppointments