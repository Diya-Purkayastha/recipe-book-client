import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../components/Logo';


const DashboardLayout = () => {
    
    return (
        <section className='bg-[#fff8f3] min-h-screen'>
            <div className="drawer lg:drawer-open w-11/12 mx-auto gap-4">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden"><NavLink to="/dashboard">Dashboard</NavLink></div>
                    
                </div>
                {/* Page content here */}
                <div className='mt-8'>
                      <Outlet></Outlet>
                </div>
               

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary text-base-content min-h-full w-100 p-4"> 
                    {/* Sidebar content here */}
                    <div className=''>
                        <Logo></Logo>
                    </div>
                    <div className=" text-4xl font-bold text-white border-b-2  mt-4">
                        
                    
                    <NavLink to="/dashboard">Dashboard</NavLink></div>
                    <div className='text-white font-semibold text-lg'>
                    <li><NavLink to="/dashboard/allitems">All Items</NavLink></li>
                    <li><NavLink to="/dashboard/myrecipe">My Recipe</NavLink></li>
                    <li><NavLink to="/dashboard/addrecipe">Add Recipe</NavLink></li>
                    </div>
                </ul>
            </div>
        </div>
        </section>
    );
};

export default DashboardLayout;