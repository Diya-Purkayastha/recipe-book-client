import React from 'react';
import useTitle from '../hook/useTitle';
import Lottie from 'lottie-react';
import error from '../assets/animation/error.json'
import { Bounce } from 'react-awesome-reveal';

const ErrorPage = () => {
    useTitle("error")
    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-40'>
             
             <Lottie animationData={error} loop={true} style={{ width: 300, height: 300 }}  />
             <Bounce delay={300} loop={true}>
                    <h1 className='bg-red-500 p-2 w-[100] h-[100] rounded-full text-4xl'>Error</h1>
             
            <h1 className='text-5xl bg-red-500 p-2 w-[100] h-[100] rounded-full'>Page Not Found</h1>
            </Bounce>
        </div>
    );
};

export default ErrorPage;