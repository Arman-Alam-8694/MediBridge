import { useCallback, useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)

    const logOutHandler = useCallback(() => {
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }, [])
    return (
        <div className='flex justify-between items-center p-2 border-b '>
            <div className='flex items-center gap-4'>
                <img src={assets.admin_logo} />
                {aToken ? <p className='border-2 rounded-full not-last:rounded-full border-[#5f6FFF] px-2 '>ADMIN</p> : <p className='border rounded-full px-2 '>dOCTOR</p>}
            </div>
            <button className='bg-[#5f6FFF] text-white text-sm rounded-full p-2 cursor-pointer' onClick={logOutHandler}>LOGOUT</button>
        </div>
    )
}

export default Navbar