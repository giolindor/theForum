const Navbar = () => {
    return <div className="w-screen flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl text-stone-900 font-bold font-Inter" style={{ fontFamily: "Inter", fontWeight: "bold"}}>The Forum.</h1>
        <button className="bg-orange-500 p-1 w-24 rounded-3xl text-white font-bold cursor-pointer">Sign Up</button>
    </div>
}

export default Navbar;