import React from "react";

const Navbar : React.FC = () =>{
    return (
        <nav className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Printify</h1>
            <ul className="flex gap-6 text-sm">
                <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-xl">Home</button>
                <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-xl">Services</button>
                <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-xl">Pricing</button>
                <button className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-xl">Order Now</button>
            </ul>

        </nav>

    );
};

export default Navbar;