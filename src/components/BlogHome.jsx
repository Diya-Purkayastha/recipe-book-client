import React from 'react';
import { Link } from 'react-router';

const BlogHome = ({ blog }) => {
    console.log(blog);
    return (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
            <figure>
                <img
                    src={blog.img}
                    alt="blog" />
                    
            </figure>
            
            <div className="card-body text-black">
                <div className='flex justify-between'>
                <p className='text-accent'>{blog.author}</p>
                <p className='text-accent'>{blog.time}</p>
                </div>
                <h2 className="card-title text-black">{blog.title}</h2> 
               <Link to={`/blog/${blog.id}`} className="btn btn-secondary "><span  className=''>View Blog</span> </Link>
            </div>
        </div>
    );
};

export default BlogHome;