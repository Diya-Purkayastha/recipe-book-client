import React from 'react';
import { Link } from 'react-router';

const BlogHome = ({ blog }) => {
    console.log(blog);
    return (
        <div className="card bg-base-100 image-full  shadow-sm">
            <figure>
                <img className='object-cover'
                    src={blog.img}
                    alt="blog" />

            </figure>

            <div className="card-body ">
                <div className='flex justify-between'>
                    <p className=''>{blog.author}</p>
                    <p className=''>{blog.time}</p>
                </div>
                <h2 className="card-title">{blog.title}</h2>
               
                <div className="card-actions">
                     <Link to={`/blog/${blog.id}`} className="btn btn-secondary "><span className=''>View Blog</span> </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogHome;