import './header.css'
import {useState} from "react";
function HeaderTemplate () {

    return (
        <div className="header">
            <img src="../src/assets/profile-round.png"></img>
            <div className="header-text">
                <h1>Hi, I'm Claudia!</h1>
                <h3>Doctor turned Software Developer</h3>
                <p>Navigating the realms of full-stack development to merge creativity, functionality, and technology seamlessly.</p>
            </div>

        </div>
    )
}

export default HeaderTemplate