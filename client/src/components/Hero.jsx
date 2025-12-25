import KBCCLogo from "../assets/KBCCLogo.png"
import Footer from "../components/Footer.jsx"

const Hero = () => {
    return <div className="h-[550px]">
        <div className="flex flex-row justify-around items-center">
            <div className="flex flex-col p-28">
                <h1 className="text-6xl font-bold w-[700px]">A Simple Forum for Kingsboroughs Computer Science Students, <span className="text-orange-500">Built</span> by Kingsborough Students.</h1>
                <p className="text-xl text-gray-800 p-4">Get <span className="text-orange-400"> in-depth</span> info on courses, study groups, professors, and more!</p>    
            </div>
            <div className="w-[600px] mr-8">
            <a href="https://www.kbcc.cuny.edu/index.html" target="_blank"><img src={KBCCLogo} alt="Kingsborough Community College Logo" className="object-cover"/></a>
            </div>
        </div>

    </div> 
}

export default Hero; 