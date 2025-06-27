import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const IngredientsHome = () => {
    return (
        <section className="w-full bg-[#fff8f3] py-16 rounded-2xl mt-30 ">
            <div className="max-w-6xl mx-auto px-4 text-center dark:text-black">
                <small>Tasty and Crunchy</small>
                <h2 className="text-4xl font-bold mb-2 text-primary">Ingredients</h2>
                <p className="text-lg">From Farm to Fork – Fresh and Wholesome</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center my-6'>
                    <Bounce delay={300} triggerOnce>
                        <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#f3e5db]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="" />
                            </div>
                        <h3 className='font-semibold text-primary'>Fresh Ingredients</h3>
                        <small className='text-accent'>Hand-picked, organic produce to ensure every meal bursts with flavor and nutrition.</small>
                    </div>
                    </Bounce>
                    <Bounce delay={300} triggerOnce>
                        <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#f3e5db]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon2.png" alt="" />
                            </div>
                        <h3 className='font-semibold text-primary'>Healthy Meals</h3>
                        <small className='text-accent'>Wholesome recipes designed to support a balanced diet without compromising the taste.</small>
                    </div>
                    </Bounce>
                    
                    <Bounce delay={300} triggerOnce>
                         <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#f3e5db]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon3.png" alt="" />
                            </div>
                        <h3 className='font-semibold  text-primary'>Mediterranean Taste</h3>
                        <small className='text-accent'>Inspired by the rich flavors of the Mediterranean — olive oil, grains, and herbs in perfect harmony.</small>
                    </div>
                    </Bounce>
                   
                    <Bounce delay={300} triggerOnce>
                        <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#f3e5db]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon4.png" alt="" />
                            </div>
                        <h3 className='font-semibold  text-primary'>Eating Well</h3>
                        <small className='text-accent'>Simple, delicious dishes that promote mindful eating, nourishment, and overall wellness.</small>
                    </div>
                    </Bounce>
                    
                   
                </div>
            </div>
        </section>

    );
};

export default IngredientsHome;