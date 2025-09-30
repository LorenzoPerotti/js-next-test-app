import React from "react";
import './Topbar.css';



function TopBar({title}) {

    return(
        <div className="topbar">
            {title}
        </div>
    )
}

export default TopBar;