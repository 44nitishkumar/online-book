import React from "react"



const HeroSection = () => {
    return(
        <div className="container mx-auto px-4 md:px-16 lg:px-24">
         <div className="flex items-center justify-between " >
            <div>

            
            <h1>SALE UP TO 20% OFF</h1>
            <p>Meet Your Next</p>
            <p>Favorite Books.</p>
            <h3>Shop Now  >></h3>
         </div>
         <div >

        
           <img src="/books.avif" alt="Books Promo " className="w-full max-w-md rounded-lg shadow-lg mt-10"></img>
            </div>
         </div>
        
        </div>
    )
}

export default HeroSection