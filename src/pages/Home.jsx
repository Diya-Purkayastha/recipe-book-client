import React, { use } from 'react';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import IngredientsHome from '../components/IngredientsHome';
import BlogHome from '../components/BlogHome';

const blogPromise = fetch('/blog.json').then(res=>res.json());
const Home = () => {
    const blogs = use(blogPromise)
    return (
        <div>
           
            <div className='max-w-5xl rounded-2xl mx-auto'>
                <Slider />
            </div>

                <TopRecipes></TopRecipes>
                <IngredientsHome></IngredientsHome>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                blogs.map(blog =>  <BlogHome blog={blog}></BlogHome>)
               }
               </div>
        </div>
    );
};

export default Home;