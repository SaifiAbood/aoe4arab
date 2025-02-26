

const Navbar = () => {
    return (
        <div className=" pl-2 pr-2 bg-[#0f0f11] h-[72px] text-white text-opacity-95 border-b border-[#1f1f23]">
            <div className="  w-full max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between ">
                    <ul className="w-full flex items-center justify-between">
                        {/* الجزء الأيسر */}
                        <li>
                            <h1 className="text-2xl text-white font-bold py-2 my-3 px-3 rounded-lg">
                                AoE4 Arab
                            </h1>
                        </li>

                        {/* الجزء الأيمن */}
                        <li>
                            <input
                                type="text"
                                placeholder="Search players..."
                                className="bg-gray-200 transition focus:bg-white text-black px-6 py-3 font-bold placeholder-gray-900 rounded-full focus:outline-none w-64"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
