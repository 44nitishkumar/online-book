import React from "react"
import {Link} from "react-router"
import {FaSearch} from "react-icons/fa"


const Navbar = () => {
    return(
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 ">
                <div className="flex items-center justify-between py-4">
                    <div  className="flex items-center gap-x-6">
                    <Link to="/" className="font-bold text-lg text-green-700">PickBazar</Link>
                    <Link to="/shops" className="hover:text-green-400">Shops</Link>
                    <Link to="/offer" className="hover:text-green-400">Offer</Link>
                    <Link to="/contact" className="hover:text-green-400">Contact</Link>
                    <Link to="/pages" className="hover:text-green-400">Pages</Link>  
                    </div>
                    
                    
                   <div className="flex items-center gap-x-6">
                    <button className="px-2.5 py-2 border border-gray-200 rounded-lg font-semibold">Books</button>
                    <FaSearch className="w-6 h-6  border border-gray-300 rounded-full"></FaSearch>
                    <button className="px-2.5 py-2 bg-green-600 text-white rounded-lg text-semibold">Join</button>
                    <button className="px-2.5 py-2 bg-green-600 text-white rounded-lg text-semibold">Become a seller</button>
                   </div>
                   </div>
                   
            
            </div>
        </nav>
    )
}
export default Navbar