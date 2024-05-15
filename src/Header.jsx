import React from 'react';

function Header() {
    return (
        <>
            <div className=' flex justify-between items-center '>
                {/* this is left Menu icon and youtube logo */}
                <div className='flex items-center '>
                    <h1>m</h1>
                    <img src="" alt="" />
                </div>
                {/* middel side part search button  */}
                <div>
                    <input type="text" name="input" id="" />
                    <h1>Serch</h1>
                </div>
                {/* look this end part of youtube */}
                <div className='flex gap-2'>
                    <h1>vi</h1>
                    <h1>appi</h1>
                    <h1>noti</h1>
                    <h1>avate</h1>
                </div>
            </div>
        </>
    );
};

export default Header;


