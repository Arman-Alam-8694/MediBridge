import { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('ADMIN');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAToken, backendUrl } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/admin/login', { email, password });
            const data = response.data;

            if (data.success === true) {
                toast.success("Login successful")
                setAToken(data.token); // Set the token in context
                localStorage.setItem('aToken', data.token)
            } else {

                console.log("Login failed. Error:", data.message); // Handle backend error
                toast.error(data.message)

            }
        } catch (error) {
            console.log("Request failed. Error:", error); // Handle network or server errors
        }
    };


    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-lg'>
                <p className='text-center w-full'>
                    <span className='text-[#5f6FFF] font-medium'>{state}</span> LOGIN
                </p>
                <div className='w-full'>
                    <p>ENTER EMAIL:</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        required
                        className='border border-[#DADADA] rounded w-full p-2 mt-1'
                    />
                </div>
                <div className='w-full'>
                    <p>ENTER PASSWORD:</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        required
                        className='border border-[#DADADA] rounded w-full p-2 mt-1'
                    />
                </div>
                <div className='flex w-full mt-2 items-center justify-center'>
                    <button type="submit" className='border p-2 rounded-lg hover:scale-110 duration-300 transition-all cursor-pointer'>
                        SUBMIT
                    </button>
                </div>
                {state === 'ADMIN' ? (
                    <p>
                        Doctor Login?{' '}
                        <span onClick={() => setState('DOCTOR')} className='text-blue-500 underline cursor-pointer'>
                            click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Admin Login?{' '}
                        <span onClick={() => setState('ADMIN')} className='text-blue-500 underline cursor-pointer'>
                            click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;