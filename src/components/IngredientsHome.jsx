import React from 'react';

const IngredientsHome = () => {
    return (
        <section className="w-full bg-[#ebebeb] py-16 rounded-2xl">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <small>Tasty and Crunchy</small>
                <h2 className="text-4xl font-bold mb-2">Ingredients</h2>
                <p className="text-lg">From Farm to Fork – Fresh and Wholesome</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center my-6'>
                    <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#d5d5d5]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="" />
                            </div>
                        <h3 className='font-semibold'>Fresh Ingredients</h3>
                        <small className='text-accent'>Hand-picked, organic produce to ensure every meal bursts with flavor and nutrition.</small>
                    </div>
                    <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#d5d5d5]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon2.png" alt="" />
                            </div>
                        <h3 className='font-semibold'>Healthy Meals</h3>
                        <small className='text-accent'>Wholesome recipes designed to support a balanced diet without compromising the taste.</small>
                    </div>
                    <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#d5d5d5]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon3.png" alt="" />
                            </div>
                        <h3 className='font-semibold'>Mediterranean Taste</h3>
                        <small className='text-accent'>Inspired by the rich flavors of the Mediterranean — olive oil, grains, and herbs in perfect harmony.</small>
                    </div>
                    <div className=''>
                            <div className='w-[150px] mx-auto'>
                                 <img className='p-4 rounded-full bg-[#d5d5d5]' src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon4.png" alt="" />
                            </div>
                        <h3 className='font-semibold'>Eating Well</h3>
                        <small className='text-accent'>Simple, delicious dishes that promote mindful eating, nourishment, and overall wellness.</small>
                    </div>
                   
                </div>
            </div>
        </section>

    );
};

export default IngredientsHome;