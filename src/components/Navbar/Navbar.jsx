import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/react.svg'
const Navbar = () => {
    return (
     <>
        <Router>
           <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                        <>
                            <img src={logo} alt="" className='h-10 w-auto' />
                            <span className='hidden md:block text-white text-2xl font-bold ml-2 mt-2'>React Jobs</span>
                        
                        </>

                        <div className='md:ml-auto'>
                            <div className='flex space-x-2'>
                                <Link>
                                    Home
                                </Link>
                                <Link>
                                    Jobs
                                </Link>

                                <Link>
                                    Add Jobs
                                </Link>



                            </div>

                        </div>

                    </div>
                </div>
            </div>
           </nav>
        </Router>
    </>
    );
};

export default Navbar;