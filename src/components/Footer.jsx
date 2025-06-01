import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    
                
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-lg font-bold text-gray-800">THE PICKBAZAR APP</h2>
                        <p className="text-gray-700">Make your online shop easier</p>
                        <p className="text-gray-700">
                            with our <span className="font-semibold text-indigo-600">mobile app</span>
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start mt-4">
                            <img
                                src="/app-store.webp"
                                alt="App Store"
                                className="w-32 h-auto"
                            />
                            <img
                                src="/play-store.webp"
                                alt="Play Store"
                                className="w-32 h-auto"
                            />
                        </div>
                    </div>

                    
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/mockup-img.webp"
                            alt="Mobile Mockup"
                            className="w-full max-w-sm rounded-lg shadow"
                        />
                    </div>

                </div>
            
            <div className="bg-gray-200">
                <div className="flex flex-col md:flex-row align-items-center justify-between gap-10">

                
                <div >
                    <Link to="/" className="text-2xl font-bold" >PickBazar</Link>
                    <p className="text-lg mt-3 mb-3">Jamshedpur, Telco</p>
                    <p>44nitishkumar@gmail.com</p>
                    <p className="mb-2">+91 7488238028</p>
                    <div className="flex">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaInstagram></FaInstagram>
                    </div>
                </div>
                <div className="grid grid-col">
                    <h2 className="text-lg font-semibold">Explore</h2>
                    <Link to="/shops" className="hover:text-orange-500 mt-3 mb-3">Shops</Link>
                    <Link to="/authors" className="hover:text-orange-500 mb-2">Authors</Link>
                    <Link to="/flash deals" className="hover:text-orange-500 mb-2">FlashDeals</Link>
                    <Link to="/coupon" className="hover:text-orange-500 mb-2">Coupon</Link>
                </div>
                <div className="grid grid-col">
                    <h2 className="text-lg font-semibold">Customer Service</h2>
                    <Link to="/faq & help" className="hover:text-orange-500 ">FAQ & Help</Link>
                    <Link to="/vendor refund" className="hover:text-orange-500">Vendor Refund Policies</Link>
                    <Link to="customer refund" className="hover:text-orange-500">Customer Refund Policies</Link>
                </div>
                <div className="grid grid-col">
                    <h2 className="text-lg font-semibold">Our Information</h2>
                    <Link to="/manufactures" className="hover:text-orange-500">Manufactures</Link>
                    <Link to="/privacy policies" className="hover:text-orange-500">Privacy Policies</Link>
                    <Link to="terms & condition" className="hover:text-orange-500">Terms & Conditions</Link>
                    <Link to="contact us" className="hover:text-orange-500">Contact Us</Link>

                </div>
                <div className="grid grid-col">
                    <h2 className="text-lg font-semibold">Subscribe Now</h2>
                    <p className="mt-2 mb-2">Subscribe your email for newsletter and featured news based on your interest.</p>
                    <input type="text" placeholder="Write your email here" />
                </div>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
