import React from 'react';
import '../../../index.css'
// import MenuIcon from "@mui/material/Icon/";
import menu from "../../../Assist/Nebvericon/menu_icon.png"
import clojse from "../../../Assist/Nebvericon/youtube_icon.png"
import search from "../../../Assist/Nebvericon/search-icon.png"
import microphone from "../../../Assist/Nebvericon/microphone_con.png"
import video from "../../../Assist/Nebvericon/video_icon.png"
import notification from "../../../Assist/Nebvericon/notification_icon.png"
import profile from "../../../Assist/Nebvericon/profile.png"
import { Link } from 'react-router-dom';

function Navber() {
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
                    <div className='flex'>
                        <div className=' flex gap-2 bg-white px-2 rounded-3xl border-4 border-red-300'>
                            <input className='w-96 border-none outline-none bg-transparent' type="text" name="input" id="" placeholder='Search' />
                            <img className='size' src={search} alt="" />
                        </div>
                        <img className='size' src={microphone} alt="" />
                    </div>
                    {/* look this end part of youtube */}
                    <div className='flex gap-2'>
                        <img className='size' src={video} alt="" />
                        <img className='size' src={notification} alt="" />
                        <img className='size' src={profile} alt="" />

                       

                    </div>
                </div>

            </nav>
        </>
    );
};

export default Navber;


