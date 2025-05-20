import React from 'react';
import useTitle from '../hook/useTitle';

const ErrorPage = () => {
    useTitle("error")
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-40'>
            <img className='w-6/12 shadow-sm' src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7KCpGW9_D2rIlNV2JhFspQ.png" alt="" />
            <h1 className='text-5xl text-red-500'>Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;