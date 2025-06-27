import React from 'react';


const Logo = () => {
    return (
        <div className='flex'>
            <img src="/icon.png" alt="" className='w-10' />
            <a href='/' className=" cursor-pointer text-xl"><div className="md:text-3xl text-white font-medium"><h1>Recipe<span className='text-secondary'>booK</span></h1></div></a>
        </div>
    );
};

export default Logo;