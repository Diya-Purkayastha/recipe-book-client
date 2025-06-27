import React from 'react';
import { NavLink } from 'react-router';

const PromotionalBanner = () => {
    return (
        <div className="mt-30 lg:mt-50">
            <div className="relative w-full bg-[#fff8f3] rounded-xl overflow-hidden">
                {/* 🔆 Top-centered orange glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-[#f05400] blur-3xl opacity-30 z-0" />

                {/* 📸 Background image with promo content */}
                <div
                    className="w-full bg-cover bg-center py-24 relative z-10 rounded-xl"
                    style={{ backgroundImage: "url('https://i.ibb.co/YBgzRnzj/Untitled-design.png')" }}
                >
                    <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-6 text-center lg:text-left px-4 ">
                        <div className='max-w-xl text-center'>
                            <h2 className="text-4xl font-bold mb-2 text-primary">Get Our Seasonal Recipe Bundle 🍁</h2>
                            <small className=" text-base font-semibold  text-gray-800">
                                Sign up now and unlock 20+ exclusive recipes curated for this season.
                            </small>
                            <p className="text-sm text-gray-800 font-light mt-2">
                                Discover the flavors of the season with 20+ exclusive, chef-curated recipes made just for you.
                                Whether you're planning a cozy family dinner or an impressive festive spread,
                                this bundle has everything you need.
                            </p>
                            
                        </div>
                        <NavLink to='/allrecipe'><button className="btn btn-secondary mt-4 lg:mt-0">Visit Now</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionalBanner;
