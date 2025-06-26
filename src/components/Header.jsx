import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // Apply theme on load & change
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const handleThemeToggle = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // scrolled more than 50px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast('you logged out successfully')
            }).catch((error) => {
                // An error happened.
                toast(error.message);
            });
    };
    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allrecipe">All Items</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/privacypolicy">Support</NavLink></li>
            {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
        </>
    );
    const navbarClass = isHome
        ? `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-primary shadow text-white' : 'bg-white/10 backdrop-blur-sm text-white'
        }`
        : 'fixed top-0 left-0 z-50 w-full bg-primary text-white shadow';
    return (
        <div className={navbarClass} >
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white  text-primary rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}

                        </ul>
                    </div>
                    <a className=" text-xl"><div className="md:text-3xl text-white font-medium"><h1>Recipe<span className='text-secondary'>booK</span></h1></div></a>
                </div>
                <div className="navbar-center  hidden lg:flex ">
                    <ul className="menu menu-horizontal flex gap-4 text-[16px] px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="login-btn flex gap-5">
                        <button
                            onClick={handleThemeToggle}
                            className="btn btn-sm btn-circle bg-secondary text-white"
                        >
                            {theme === "light" ? <FaMoon /> : <FaSun />}
                        </button>

                        <img className='w-12 hidden md:block rounded-full cursor-pointer' src={`${user ? user.photoURL : ''}`} alt="user" title={user ? user.displayName : 'guest'} />
                        {
                            user ? <button onClick={handleLogout} className='btn btn-secondary text-primary'>Log Out</button> : <Link to='login' className='btn btn-secondary md:px-10 text-primary'  >Login</Link>
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Header;