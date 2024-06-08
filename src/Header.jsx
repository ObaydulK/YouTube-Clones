import React from 'react';
import MenuIcon from "@mui/material/Icon/";

function Header() {
    return (
        <>
            <div className=' flex justify-between items-center sticky z-100% bg-slate-200'>
                {/* this is left Menu icon and youtube logo */}
                <div className='flex items-center '>
                     <MenuIcon/>
                    {/* <link rel="shortcut icon" href="../public/YouTube-Clone.png" type="image/x-icon" /> */}
                </div >
                {/* middel side part search button  */}
                <div className=' flex gap-2 bg-white px-2 rounded'>
                    <input type="text" name="input" id="" />
                    <h1>Serch</h1>
                </div>
                {/* look this end part of youtube */}
                <div className='flex gap-2'>
                    <h1>vi</h1>
                    <h1>a</h1>
                    <h1>n</h1>
                    <h1>a</h1>
                </div>
            </div>
        </>
    );
};

export default Header;


