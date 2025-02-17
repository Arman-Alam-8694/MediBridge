import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from "axios"
import { toast } from "react-toastify"

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const currencySymbol = '$'

    const listAllDoctors = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/list-doctors')

            if (data.success) {

                setDoctors(data.doctors)

            }
            else {
                toast.error(data.message)
            }



        } catch (error) {

            toast.error(error.message)

        }
    }

    useEffect(() => {
        listAllDoctors()
    }, [])

    const value = {
        doctors,
        currencySymbol,
        setDoctors,
        listAllDoctors,
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider