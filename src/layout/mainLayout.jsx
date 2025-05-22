import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mainLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div className="relative" >
            {isHome && (
                <div className="absolute top-0 left-0 w-full h-[500px] -z-10">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/hRPRKC6t/layered-waves-haikei.png')",
                        }}
                    ></div>
                </div>
            )}
            <Header></Header>
            <main className='w-11/12 mx-auto min-h-[calc(100vh-335px)]'>

                <Outlet></Outlet>
                <ToastContainer />
            </main>

            <Footer></Footer>
        </div>
    );
};

export default mainLayout;