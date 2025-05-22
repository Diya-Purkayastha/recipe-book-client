import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/slider.css'

const Slider = () => {
    return (
        <div className="w-full h-[80vh] group relative ">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="relative h-[400px] md:h-[500px] w-full bg-cover bg-center flex items-center mt-10 rounded-2xl" // ← added mt-10
                        style={{
                            backgroundImage: "url('https://i.ibb.co/qM5JF3CS/pasta.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
                            {/* Left Text Content */}
                            <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6 text-white">
                                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                                    Apple Fitness+ <br />
                                    <span className="font-bold">Essentials Box</span>
                                </h1>
                                <ul className="space-y-2 text-base">
                                    <li>🎧 3-Month Fitness+ Membership</li>
                                    <li>🎧 Access to Apple Health Challenges</li>
                                    <li>🎧 Discount on Apple Watch Accessories</li>
                                </ul>
                                <button className="bg-white text-black px-6 py-3 mt-4 hover:bg-gray-200">
                                    START JOURNEY
                                </button>
                            </div>

                            {/* Optional right side space */}
                            <div className="md:w-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </SwiperSlide>


                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="relative h-[400px] md:h-[500px] w-full bg-cover bg-center flex items-center mt-10" // ← added mt-10
                        style={{
                            backgroundImage: "url('https://i.ibb.co/Hf12qL7r/2.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
                            {/* Left Text Content */}
                            <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6 text-white">
                                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                                    Apple Fitness+ <br />
                                    <span className="font-bold">Essentials Box</span>
                                </h1>
                                <ul className="space-y-2 text-base">
                                    <li>🎧 3-Month Fitness+ Membership</li>
                                    <li>🎧 Access to Apple Health Challenges</li>
                                    <li>🎧 Discount on Apple Watch Accessories</li>
                                </ul>
                                <button className="bg-white text-black px-6 py-3 mt-4 hover:bg-gray-200">
                                    START JOURNEY
                                </button>
                            </div>

                            {/* Optional right side space */}
                            <div className="md:w-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </SwiperSlide>


                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="relative h-[400px] md:h-[500px] w-full bg-cover bg-center flex items-center mt-10" // ← added mt-10
                        style={{
                            backgroundImage: "url('https://i.ibb.co/Hf12qL7r/2.jpg')",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
                            {/* Left Text Content */}
                            <div className="md:w-1/2 text-center md:text-left py-12 md:pl-10 space-y-6 text-white">
                                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                                    Apple Fitness+ <br />
                                    <span className="font-bold">Essentials Box</span>
                                </h1>
                                <ul className="space-y-2 text-base">
                                    <li>🎧 3-Month Fitness+ Membership</li>
                                    <li>🎧 Access to Apple Health Challenges</li>
                                    <li>🎧 Discount on Apple Watch Accessories</li>
                                </ul>
                                <button className="bg-white text-black px-6 py-3 mt-4 hover:bg-gray-200">
                                    START JOURNEY
                                </button>
                            </div>

                            {/* Optional right side space */}
                            <div className="md:w-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;