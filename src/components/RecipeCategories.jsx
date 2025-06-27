import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router";

const categories = [
    {
        title: "Breakfast",
        img: "https://i.ibb.co/VrcvrXC/aloparata.jpg",
    },
    {
        title: "Lunch",
        img: "https://i.ibb.co/3m7H4Bn0/vegan.jpg",
    },
    {
        title: "Dinner",
        img: "https://i.ibb.co/JF2pyBpZ/veg.jpg",
    },
    {
        title: "Dessert",
        img: "https://i.ibb.co/ccv5px1y/lavacake.jpg",
    },
    {
        title: "Drinks",
        img: "https://i.ibb.co/HLhNkHY7/banana.jpg",
    },
    {
        title: "Snacks",
        img: "https://i.ibb.co/35KNmVLr/mexican-tacos-with-beef-tomato-sauce-salsa.jpg",
    },
];

const RecipeCategories = () => {
    return (
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-30 lg:mt-50">
            {/* Left Side Content */}
            <div className="max-w-2xl mx-auto">
                <div className="flex gap-4 my-4">
                    <img src="https://cdn-icons-png.flaticon.com/128/3075/3075977.png" alt="breakfast" className="w-12 h-12" />
                    <img src="https://cdn-icons-png.flaticon.com/128/135/135620.png" alt="lunch" className="w-12 h-12" />

                </div>
                <h2 className="text-4xl text-primary font-bold mb-3">Recipe Categories</h2>
                <h4 className="text-xl mb-4">Explore by Meal Type</h4>
                <p className="mb-6 text-base">
                    Discover delicious recipes for every occasion. From hearty dinners to quick snacks, find your next favorite dish in our curated collections.
                </p>


                <div className=" border-l-6 border-primary p-4 rounded">
                    <p className="italic text-sm ">
                        “Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.”
                    </p>
                </div>

                <NavLink to='/allrecipe'><button className="btn mt-4 btn-secondary">Explore More</button></NavLink>
            </div>

            {/* Right Side Slider */}
            <div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[450px] rounded-lg bg-cover bg-center flex items-center justify-center text-white text-2xl font-semibold shadow-lg"
                                style={{
                                    backgroundImage: `url(${cat.img})`,

                                }}
                            >
                                <div className="bg-primary bg-opacity-50 px-6 py-2 rounded">
                                    {cat.title}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RecipeCategories;
