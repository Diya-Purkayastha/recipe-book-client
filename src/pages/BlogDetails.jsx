import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../hook/useTitle';
const BlogDetails = () => {
    useTitle('Blog')
    const data = useLoaderData();
    const { id } = useParams();

    const [blog, setBlog] = useState({});
    useEffect(() => {
        const blogDetails = data.find(singleData => singleData.id == id)
        setBlog(blogDetails)
    }, [data, id])
    return (
        <div className="max-w-6xl mx-auto my-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           
                <div>
                    <img
                        src={blog.img}
                        alt={blog.name}
                        className="w-full h-auto rounded-xl shadow-md object-cover"
                    />
                </div>

              
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">{blog.title}</h2>
                    <p>{blog.description}</p>
                    <p className='font-semibold'>Author: <span className='font-medium'>{blog.author}</span> </p>
                    <p className='font-semibold'>Published_date: <span className='font-medium'>{blog.time}</span> </p>
               
                    


                </div>
            </div>
        </div>
    );
};

export default BlogDetails;