import React, { use } from 'react';
import PromotionalBanner from '../components/PromotionalBanner';
import { Slide } from 'react-awesome-reveal';
import BlogHome from '../components/BlogHome';

const blogPromise = fetch('/blog.json').then(res => res.json());
const About = () => {
    const blogs = use(blogPromise)
    return (
        <Slide delay={300} direction='up' triggerOnce>
        <div className='w-11/12 mx-auto mt-30'>
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                
                {/* Left: Text content */}
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-primary">
                        Who We Are
                    </h2>
                    <h3 className="text-xl text-secondary font-semibold border-l-4 border-primary ">
                        <span className='ml-2'>Passionate About Homemade Cooking</span>
                    </h3>
                    <p className=" text-secondary leading-relaxed">
                        At RecipeBook, we believe that cooking is more than just following instructions — it's about
                        discovering flavors, creating memories, and sharing joy. Our platform helps everyday home cooks
                        find easy, delicious, and healthy recipes that fit every mood and moment. 
                        <br /><br />
                        From seasonal bundles to user-curated collections, we aim to simplify your cooking journey
                        with inspiration, tips, and a community that loves food as much as you do.
                    </p>
                </div>

                {/* Right: Illustration */}
                <div className="lg:w-1/2">
                    <img
                        src="https://i.ibb.co/JFHLcfTb/About-us-page-cuate.png"
                        alt="About us cooking illustration"
                        className="w-full max-w-lg mx-auto"
                    />
                </div>

            </div>


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
        </Slide>
    );
};

export default About;