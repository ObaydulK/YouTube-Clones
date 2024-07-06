import React from 'react';
import img from "../../../../Assist/Img/Thamrel.png"

function Postitem() {
    return (
        < >
            <div className='card bg-slate-200'>
                <img src={img} alt="" />
                <div className='capitalize font-serif'>
                    <img className='h-[30%]' src="" alt="channel images" />
                    <div className=''>
                        {/* this is video titile ber */}
                        <div > top 5 best boy tranformation after</div>
                        {/* this is channer name  */}
                        <div>jimi morgan </div>
                        {/* this part views and time  */}
                        <div className='flex gap-4'>
                            <p>1.5M views </p>
                            <p>2 years ago</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Postitem;