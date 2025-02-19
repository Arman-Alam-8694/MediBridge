import { useState, useRef, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Login = () => {

    const { setToken, backendUrl } = useContext(AppContext)
    const [state, setstate] = useState("sign up");
    const [userName, setuserName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const formRef = useRef(null);
    const innerdiv = useRef(null)

    const handleFlip = (newState) => {
        if (formRef.current && innerdiv.current) {
            setstate(newState);
            innerdiv.current.classList.add('opacity-0')
            formRef.current.classList.add("rotate-y-180");

            setTimeout(() => {
                formRef.current.classList.remove("rotate-y-180");
                // innerdiv.current.classList.remove('opacity-0')
            }, 400);
            setTimeout(() => {
                innerdiv.current.classList.remove('opacity-0')
            }, 700);

        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (state === "sign up") {
                const { data } = await axios.post(backendUrl + '/api/user/register', { name: userName, email, password })
                console.log(data)
                if (data.success) {
                    setToken(data.token)
                    localStorage.setItem('token', data.token)
                    console.log('token created for the new user')
                    toast.success('user registered successfully')

                }
                else {

                    toast.error(data.message)
                }


            } else {
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
                console.log(data)
                if (data.success) {
                    setToken(data.token)
                    localStorage.setItem('token', data.token)
                    console.log('token created for the new user')
                    toast.success('user login successfully')

                }
                else {

                    toast.error(data.message)

                }
            }

        } catch (error) {

            toast.error(error.message)

        }

    }




    return (
        <form onSubmit={onSubmitHandler} ref={formRef} className="min-h-[80vh] flex items-center justify-center transition-all duration-400 border-solid">
            <div className="border shadow-lg">
                <div ref={innerdiv} className="flex flex-col gap-3 items-start p-8 m-auto min-w-[340px] sm:min-w-96  text-sm text-zinc text-zinc-600 ">
                    <p className="text-2xl font-semibold">
                        {state == "sign up" ? 'CREATE ACCOUNT' : 'Log into your account'}
                    </p>
                    <p>Please {state == "sign up" ? 'create your account ' : 'Log into your account'} to book</p>
                    {state === "sign up" && (
                        <div className="w-full">
                            <p>Username</p>
                            <input className='border border-zinc-300 mt-1 w-full p-2' type='text' onChange={(e) => setuserName(e.target.value)} value={userName} required />
                        </div>
                    )}
                    <div className="w-full">
                        <p>Email</p>
                        <input className='border border-zinc-300 mt-1 w-full p-2' type='email' onChange={(e) => setemail(e.target.value)} value={email} required />
                    </div>
                    <div className="w-full">
                        <p>Password</p>
                        <input className='border border-zinc-300 mt-1 w-full p-2' type='password' onChange={(e) => setpassword(e.target.value)} value={password} required />
                    </div>
                    <button type='submit' className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base ">{state == "sign up" ? 'CREATE ACCOUNT ' : 'LOG IN'}</button>
                    {state == "sign up" ? (
                        <p>Already have an account? <span onClick={() => handleFlip('Login')} className="text-[#5f6FFF] underline cursor-pointer">Login here</span></p>
                    ) : (
                        <p>Create a new account? <span onClick={() => handleFlip('sign up')} className="text-[#5f6FFF] underline cursor-pointer">Click here</span></p>
                    )}
                </div>

            </div>
        </form>
    );
};

export default Login;
