import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Button = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
        <div className="mb-5 flex items-center justify-center">
            <Link to="/signup">
            <button className={` bg-orange-500 shadow-lg font-bold text-white text-2xl rounded-4xl cursor-pointer p-[15px] w-48 hover:bg-orange-400 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Get Started</button>
            </Link>
        </div>
        </>
    );
}

export default Button;