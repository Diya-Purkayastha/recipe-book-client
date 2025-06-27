import React, { use } from 'react';
import Slider from '../components/Slider';
import TopRecipes from '../components/TopRecipes';
import IngredientsHome from '../components/IngredientsHome';
import BlogHome from '../components/BlogHome';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';
import PromotionalBanner from '../components/PromotionalBanner';
import Newsletter from '../components/Newsletter';
import RecipeCategories from '../components/RecipeCategories';

const blogPromise = fetch('/blog.json').then(res => res.json());
const Home = () => {
    const blogs = use(blogPromise)
    return (
        <div>

            <div className="slider-wrapper w-full overflow-hidden">
                <Slider />
            </div>

            <div className='w-11/12 mx-auto'>
                <TopRecipes></TopRecipes>
                <div className='flex justify-center'>
                    <Link to='/allrecipe' className='btn btn-secondary px-10'>See All</Link>
                </div>
                <IngredientsHome></IngredientsHome>

                <div className='mt-30 lg:mt-40'>
                    <div className='text-center'>
                        <small>Where Recipes Come with Stories</small>
                        <h2 className="text-4xl text-primary font-bold mb-2">Read. Crave. Cook.</h2>
                        <p className="text-lg">Bite into Flavor, Stay for the Stories</p>
                    </div>
                    <Slide delay={300} direction='up' triggerOnce>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'>

                            {
                                blogs.map(blog => <BlogHome blog={blog}></BlogHome>)
                            }
                        </div>
                    </Slide>
                </div>

                <Slide delay={300} direction='up' triggerOnce>
                <PromotionalBanner></PromotionalBanner>
                </Slide>
                <RecipeCategories></RecipeCategories>
            </div>
            <Slide delay={300} direction='up' triggerOnce>
                   <Newsletter></Newsletter>
            </Slide>
        </div>
    );
};

export default Home;