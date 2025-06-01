import React from "react"



const HeroSection = () => {
    return(
        <div className="container mx-auto  px-4 md:px-16 lg:px-24 mt-10 ">
         <div className="flex items-center justify-between bg-gradient-to-l from-green-300 to-green-700 w-full rounded  " >
            <div className="px-4">

            
            <h1 className="font-bold text-white">SALE UP TO 20% OFF</h1>
            <p className="text-4xl font-bold text-white">Meet Your Next</p>
            <p className="text-3xl font-bold text-white">Favorite Books.</p>
            <h3 className="font-semibold text-white">Shop Now </h3>
         </div>
         <div >

        
           <img src="/books.avif" alt="Books Promo " className="w-full max-w-md rounded-lg shadow-lg flex items-center p-5"></img>
            </div>
         </div>
        
        </div>
    )
}

export default HeroSection