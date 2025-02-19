import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import axios from "axios"
import { toast } from "react-toastify"

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const currencySymbol = '$'
    const [userData, setUserData] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
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

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/profile', {
                headers: {
                    token
                }
            })
            if (data.success) {
                console.log(data.user)
                setUserData(data.user)
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

    useEffect(() => {
        if (token) {
            getUserData()
        }
    }, [token])

    const value = {
        doctors,
        currencySymbol,
        setDoctors,
        listAllDoctors,
        token, setToken, backendUrl, getUserData, userData, setUserData,
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider