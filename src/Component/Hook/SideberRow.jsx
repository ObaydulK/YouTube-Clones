import React from "react";

function SideberRow({title, Icon, sub}) {
    return (
        <div className="flex gap-3 px-4">
            <div className="text-2xl" >{Icon}</div>
            <div className="text-2xl capitalize">{title}</div>
            {/* <img src={imges} alt="" /> */}
        </div>
    );
}

export default SideberRow;