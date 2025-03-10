import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext(null); // Default value




const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctors, setDoctors] = useState([])

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, { headers: { aToken: aToken } })
            if (data.success) {
                setDoctors(data.doctors)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)


        }
    }

    const toggleAvailability = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-Availability', { docId }, { headers: { aToken: aToken } })
            console.log(data)
            if (data.success) {
                console.log(data.availability)
                toast.success(data.message)
                getAllDoctors()

            }



        } catch (error) {
            toast.error(error.message)

        }

    }

    const value = {
        aToken,
        setAToken,
        backendUrl,
        doctors,
        setDoctors,
        getAllDoctors,
        toggleAvailability,
    };


    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};
export default AdminContextProvider;