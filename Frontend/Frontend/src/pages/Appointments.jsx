import { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
    const { doc_id } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setdocSlots] = useState([]);
    const [slotIndex, setslotIndex] = useState(0);
    const [slotTime, setslotTime] = useState("12:00 PM");
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const timeslotRef = useRef(null); // Ref for the timeslot container

    const getDoctorInfo = async () => {
        const selectedDoctor = doctors.find((doc) => doc._id === doc_id);
        setDocInfo(selectedDoctor);
    };

    const getAvailableSlots = async () => {
        setdocSlots([]);
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date();
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (currentDate.getDate() === today.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 0 : 30);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let daySlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                daySlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }
            setdocSlots((prev) => [...prev, daySlots]);
        }
    };

    // Scroll timeslots horizontally
    const scrollTimeslots = (direction) => {
        if (timeslotRef.current) {
            const scrollAmount = 200; // Adjust scroll amount as needed
            if (direction === 'left') {
                timeslotRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else if (direction === 'right') {
                timeslotRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        getDoctorInfo();
    }, [doc_id, doctors]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);


    return docInfo && (
        <div>
            <div className=' flex flex-col sm:flex-row gap-4'>
                {/* doctor image */}
                <div>
                    <img className='bg-[#5f6FFF] w-full sm:max-w-73 rounded-lg ' src={docInfo.image} />
                </div>
                {/* doctor name,degree experience */}
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    <div>
                        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                            {docInfo.name}
                            <img className='w-5' src={assets.verified_icon} />

                        </p>
                        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                            <p >{docInfo.degree}-{docInfo.speciality}</p>

                            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                        </div>

                    </div>
                    {/* Doctor About */}
                    <div >
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} /></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-2'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
                </div>

            </div>
            <div className='sm:ml-73 sm:pl-4 mt-4 font-medium text-gray-700 '>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 scrollbar-hide'>{
                    docSlots.length && docSlots.map((item, index) => (
                        <div onClick={() => (setslotIndex(index))} className={`text-center py-6 min-w-16  rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#5f6FFF] text-white' : 'border border-gray-600'}`}
                            key={index}>
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>

                    ))}
                </div>
                {/* Booking Slots */}
                <div className='mt-4 font-medium text-gray-700 mb-4'>

                    <div className='flex items-center py-2 gap-2 w-full overflow-x-scroll mt-4 scrollbar-hide'>
                        {/* Left arrow */}
                        <button
                            onClick={() => scrollTimeslots('left')}
                            className='bg-white border border-gray-300 rounded-full p-1 shadow-md z-10'
                        // style={{ position: 'absolute', left: '10px' }} // Positioning the left arrow on the left side
                        >
                            &#9664; {/* Left arrow symbol */}
                        </button>

                        {/* Timeslots container */}
                        <div
                            ref={timeslotRef}
                            className='flex items-center gap-3 w-full overflow-x-scroll scrollbar-hide '
                        >
                            {docSlots.length &&
                                docSlots[slotIndex].map((item, index) => (
                                    <p
                                        onClick={() => setslotTime(item.time)}
                                        className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6FFF] text-white' : 'border text-gray-400 border-gray-300'
                                            }`}
                                        key={index}
                                    >
                                        {item.time.toLowerCase()}
                                    </p>
                                ))}
                        </div>

                        {/* Right arrow */}
                        <button
                            onClick={() => scrollTimeslots('right')}
                            className='bg-white border border-gray-300 rounded-full p-1 shadow-md z-10'
                        // style={{ position: 'absolute', right: '10px' }} // Positioning the right arrow on the right side
                        >
                            &#9654; {/* Right arrow symbol */}
                        </button>
                    </div>
                </div>
                <div>
                    <button className='bg-[#5f6FFF] text-white text-sm px-14 py-3 rounded-full '>Book an Appointment</button>
                </div>

            </div>
            {/* Listing Related Doctors */}
            <RelatedDoctors doc_id={doc_id} speciality={docInfo.speciality} />





        </div>
    );
};

export default Appointments;