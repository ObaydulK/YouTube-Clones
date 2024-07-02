import React from 'react';
import './index.css'
// import MenuIcon from "@mui/material/Icon/";
import menu from "../src/Assist/Nebvericon/menu.png"
import clojse from "../src/Assist/Nebvericon/clojse.png"
import search from "../src/Assist/Nebvericon/search.png"
import microphone from "../src/Assist/Nebvericon/microphone.png"
// import video from "../src/Assist/Nebvericon/video.png"
import notification from "../src/Assist/Nebvericon/add.png"
import profile from "../src/Assist/Nebvericon/profile.png"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <nav className='  '>
                <div className='flex justify-between items-center sticky z-100% bg-slate-200 py-2 shadow-2xl  '>
                    {/* this is left Menu icon and youtube logo */}
                    <div className='flex items-center'>
                        <img className='size ' src={menu} alt="" />
                        <img className='size' src={clojse} alt="" />
                    </div >
                    {/* middel side part search button  */}
                    <div className=' flex gap-2 bg-white px-2 rounded-3xl border-4 border-red-300'>
                        <input className='w-96 border-none outline-none bg-transparent' type="text" name="input" id="" placeholder='Search' />
                        <img className='size' src={search} alt="" />
                    </div>
                    {/* look this end part of youtube */}
                    <div className='flex gap-2'>
                         <img className='size' src={microphone} alt="" /> 
                         <img className='size' src={notification} alt="" /> 
                         <img className='size' src={profile} alt="" />   
                                                
                        

                    </div>
                </div>

            </nav>
        </>
    );
};

export default Header;


