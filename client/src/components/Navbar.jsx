const Navbar = () => {
    return <div className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl text-stone-900 font-bold font-Inter cursor-pointer" style={{ fontFamily: "Inter", fontWeight: "bold"}}>The Forum.</h1>
        <div className="flex gap-3 ">
            <button className="border-orange-500 border-2 w-24 p-1 text-lg font-bold rounded-3xl cursor-pointer text-orange-500 hover:bg-orange-300 hover:text-white transition-all ease-in-out duration-300">Log In</button>
            <button className="bg-orange-500 p-1 w-24 rounded-3xl text-white text-lg text-l font-bold cursor-pointer hover:bg-orange-400 transition-all ease-in-out duration-300">Sign Up</button>
        </div>
        
    </div>
}

export default Navbar;