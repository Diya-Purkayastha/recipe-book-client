import React, { use } from 'react';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import IngredientsHome from '../components/IngredientsHome';
import BlogHome from '../components/BlogHome';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';

const blogPromise = fetch('/blog.json').then(res=>res.json());
const Home = () => {
    const blogs = use(blogPromise)
    return (
        <div>
           
            <div className='max-w-5xl rounded-2xl mx-auto'>
                <Slider />
            </div>

                <TopRecipes></TopRecipes>
                <div className='flex justify-center'>
                    <Link to='/allrecipe' className='btn btn-secondary px-10'>See All</Link>
                </div>
                <IngredientsHome></IngredientsHome>

                <div className='my-8'>
                <div className='text-center'>
                <small>Where Recipes Come with Stories</small>
                <h2 className="text-4xl font-bold mb-2">Read. Crave. Cook.</h2>
                <p className="text-lg">Bite into Flavor, Stay for the Stories</p>
                </div>
                <Slide delay={300} direction='up' triggerOnce>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>
                
                {
                blogs.map(blog =>  <BlogHome blog={blog}></BlogHome>)
               }
               </div>
                </Slide>
                 
                </div>
              
        </div>
    );
};

export default Home;