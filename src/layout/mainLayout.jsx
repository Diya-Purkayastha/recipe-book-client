import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mainLayout = () => {
    const location = useLocation();
    // const isHome = location.pathname === '/';
    const isAddRecipe = location.pathname === '/addrecipe';
    return (
        <div className="relative" >
            {/* {isHome && (
                <div className="absolute top-0 left-0 w-full h-[500px] bg-secondary -z-10" ></div>
            )} */}
            {
                isAddRecipe && (
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                        {/* Background image */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://i.ibb.co/sGShmx6/eaters-collective-12e-HC6-Fx-Pyg-unsplash.jpg')",
                            }}
                        ></div>

                        {/* Black overlay with opacity */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>

                )
            }
            <Header></Header>
            <main className=' min-h-[calc(100vh-335px)]'>

                <Outlet></Outlet>
                <ToastContainer />
            </main>


            <Footer></Footer>
        </div>
    );
};

export default mainLayout;