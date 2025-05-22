import React from 'react';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import IngredientsHome from '../components/IngredientsHome';

const Home = () => {
    return (
        <div>
           
            <div className='max-w-5xl rounded-2xl mx-auto'>
                <Slider />
            </div>

                <TopRecipes></TopRecipes>
                <IngredientsHome></IngredientsHome>
        </div>
    );
};

export default Home;