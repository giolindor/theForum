import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const LoginInfo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Link to="/">
        <h1 className="text-2xl text-stone-900 font-bold font-Inter cursor-pointer px-8 py-6" style={{ fontFamily: "Inter", fontWeight: "bold"}}>The Forum.</h1>
        </Link>
        <div className={`flex justify-center mt-[50px] transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <section className="flex flex-col mt-5 shadow-lg rounded-2xl bg-zinc-50 w-[700px] p-8">
            <h2 className="text-2xl text-center ">Welcome Back.</h2>
            <form className="flex flex-col justify-center items-center text-center gap-4">
                <label className="mt-5 flex flex-col">
                    Username
                    <input type="text" required className="w-[300px] shadow-md rounded-2xl p-1 focus:outline-orange-500 text-center  bg-white"/>
                </label>

                <label className="flex flex-col mt-8 mb-4">
                    Password
                <input type="password" name="" id="" className="w-[300px] rounded-2xl p-1 shadow-md focus:outline-orange-500 bg-white"/>
                </label>

                
                <h1>Don't have an account? <Link to="/signup"><span className="text-orange-500 underline">Sign up</span></Link></h1>
                

                <button className="mt-8 border-orange-500 border-2 w-32 p-1 text-lg rounded-3xl cursor-pointer text-orange-500 hover:bg-orange-300 hover:text-white transition-all ease-in-out duration-300 hover:font-bold">Log In</button>
            </form>
        </section>
        </div>
        </>
    )
}

export default LoginInfo;