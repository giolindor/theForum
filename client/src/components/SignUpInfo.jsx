import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const SignUpInfo = () => {
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
        <section className="flex flex-col mt-5 shadow-lg rounded-2xl bg-zinc-50 w-[400px] p-4">
            <h2 className="text-2xl text-center ">Sign Up for <span className="font-bold">The Forum.</span></h2>
            <form className="flex flex-col justify-center items-center text-center gap-4">
                <label className="mt-5 flex flex-col">
                    First Name
                    <input type="text" required className="w-[300px] shadow-md rounded-2xl p-1 focus:outline-orange-500 text-center  bg-white"/>
                </label>

                <label className="flex flex-col">
                    Last Name
                    <input type="text" required className="w-[300px] rounded-2xl shadow-md p-1 focus:outline-orange-500 text-center  bg-white"/>
                </label>

                <label className="flex flex-col">
                    Email
                    <input type="email" name="" id="" required className="w-[300px] shadow-md rounded-2xl p-1 text-center  focus:outline-orange-500 bg-white"/>
                </label>

                <label for="major" className="flex flex-col">
                    What's Your Major?
                    <select name="major" id="major" className="w-[300px] rounded-2xl p-1 shadow-md focus:outline-orange-500 bg-white">
                        <option disabled selected value></option>
                        <option value="cs" className="text-center">Computer Science</option>
                        <option value="cis" className="text-center">Computer Information Systems</option>
                        <option value="engineeringscience" className="text-center">Engineering Science</option>
                        <option value="na" className="text-center">N/A</option>
                    </select>
                </label>

                <label>Create a password</label>
                <input type="password" name="" id="" className="w-[300px] rounded-2xl p-1 shadow-md focus:outline-orange-500 bg-white"/>
  
                    <input type="checkbox" className="accent-orange-500"/>
                    <label>By Checking This Box, You agree to the <span>Privacy Policy</span> and <span>Terms of Service</span></label>
                <button className="bg-orange-500 p-1 w-24 rounded-3xl text-white text-lg text-l font-bold cursor-pointer hover:bg-orange-400 transition-all ease-in-out duration-300">Sign Up</button>
            </form>
        </section>
        </div>
        </>
    )
}


export default SignUpInfo;