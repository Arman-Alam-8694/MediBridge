import { useState } from "react"




const Login = () => {
    const [state, setstate] = useState("sign up")
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const onSubmitHandler = async (e) => (
        e.preventDefault()
    )

    return (
        <form className="min-h-[80vh] flex items-center justify-center" >
            <div className="flex flex-col gap-3 items-start p-8 m-auto min-w-[340px] sm:min-w-96 border text-sm text-zinc rounded-xl text-zinc-600 shadow-lg">
                <p className="text-2xl font-semibold">
                    {state == "sign up" ? 'CREATE ACCOUNT' : 'Log into  your account'}
                </p>
                <p>Please {state == "sign up" ? 'create your account ' : 'Log into  your account'} to book</p>
                {
                    state === "sign up" && <div className="w-full">
                        <p>username</p>
                        <input className='border border-zinc-300 mt-1 w-full p-2' type='text' onChange={(e) => setuserName(e.target.value)} value={userName} required></input>
                    </div>
                }

                <div className="w-full">
                    <p>email</p>
                    <input className='border border-zinc-300 mt-1 w-full p-2' type='email' onChange={(e) => setemail(e.target.value)} value={email} required></input>
                </div>
                <div className="w-full">
                    <p>password</p>
                    <input className='border border-zinc-300 mt-1 w-full p-2' type='password' onChange={(e) => setpassword(e.target.value)} value={password} required></input>
                </div>
                <button className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base ">{state == "sign up" ? 'CREATE ACCOUNT ' : 'LOG IN'}</button>
                {
                    state == "sign up" ? <p>Already have an account? <span onClick={() => setstate('Login')} className="text-[#5f6FFF] underline cursor-pointer">Login here</span></p> : <p>Create a new account? <span onClick={() => setstate('sign up')} className="text-[#5f6FFF] underline cursor-pointer">Click here</span></p>
                }
            </div>


        </form>
    )
}

export default Login