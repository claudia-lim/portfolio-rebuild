import './header.css'
import {useState} from "react";
function HeaderTemplate () {

    return (
        <div className="header">
            <img src="../src/assets/profile-round.png"></img>
            <div className="header-text">
                <h1>Hi, I'm Claudia!</h1>
                <h3>Doctor turned Software Developer</h3>
                <p>Exploring the world of full-stack development, with a focus on PHP, React and Javascript/Typescript.</p>
            </div>

        </div>
    )
}

export default HeaderTemplate