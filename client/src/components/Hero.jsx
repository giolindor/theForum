import KBCCLogo from "../assets/KBCCLogo.png"
import Footer from "../components/Footer.jsx"
import { useEffect, useState } from "react";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return <div className="h-[550px]">
        <div className="flex justify-center">
            <div className="flex flex-col p-28 rounded-2xl">
                <h1 className={`text-6xl font-bold w-[700px] transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>A Simple Forum for Kingsboroughs Computer Science Students, <span className="text-orange-500">Built</span> by Kingsborough Students.</h1>
                <p className={`text-xl text-gray-800 p-4 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>Get <span className="text-orange-400"> in-depth</span> info on courses, study groups, professors, and more!</p>    
            </div>
        </div>
    </div> 
}

export default Hero; 