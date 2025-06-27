import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center text-white p-10 relative overflow-hidden pt-30 md:pt-20 pb-10 px-4 mt-20">
             <div className="absolute inset-0 -z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1442 549"
                >
                    <g mask="url(#SvgjsMask1018)" fill="none">
                        <path
                            d="M 0,3 C 57.8,38.2 173.4,164.4 289,179 C 404.6,193.6 462.4,82.8 578,76 C 693.6,69.2 751.4,147.2 867,145 C 982.6,142.8 1041,47.8 1156,65 C 1271,82.2 1384.8,197.8 1442,231L1442 549L0 549z"
                            fill="rgba(0, 0, 0, 1)"
                        ></path>
                        <path
                            d="M 0,359 C 96.2,373.8 288.6,442.6 481,433 C 673.4,423.4 769.8,307.8 962,311 C 1154.2,314.2 1346,421.4 1442,449L1442 549L0 549z"
                            fill="rgba(0, 0, 0, 1)"
                        ></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1018">
                            <rect width="1442" height="549" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </div>
            <aside>
                
                <div className="text-lg font-bold">
               <div className='flex justify-center'>
                     <Logo></Logo>
               </div>
                   
                    Providing reliable recipes since 1992
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
               <div className='flex flex-col md:flex-row gap-4'>
               <Link to='/privacypolicy' className="hover:underline">Terms & Conditions</Link>
               <Link to='/privacypolicy' className="hover:underline">Privacy Policy</Link>
               </div>
               
            </aside>
           
            <nav className='m-0 p-0'>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://x.com/login?'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href='https://www.youtube.com/'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='facebook.com/groups/targetwebdevcareer'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;