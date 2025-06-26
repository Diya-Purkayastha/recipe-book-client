import React, { use } from 'react';
import PromotionalBanner from '../components/PromotionalBanner';
import { Slide } from 'react-awesome-reveal';
import BlogHome from '../components/BlogHome';

const blogPromise = fetch('/blog.json').then(res => res.json());
const About = () => {
    const blogs = use(blogPromise)
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-30'>
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
            <PromotionalBanner></PromotionalBanner>


        </div>
    );
};

export default About;