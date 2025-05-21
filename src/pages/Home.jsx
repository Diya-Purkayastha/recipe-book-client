import React from 'react';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';

const Home = () => {
    return (
        <div>
           
            <div className='max-w-5xl rounded-2xl mx-auto'>
                <Slider />
            </div>

                <TopRecipes></TopRecipes>
        </div>
    );
};

export default Home;