import ButtonAtom from "../ButtonAtom/index.jsx";
import LogoAtom from "../LogoAtom/index.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./navbar.css"
import {useState} from "react";
import SocialsAtom from "../SocialsAtom/index.jsx";

function NavBarTemplate() {

    return (
        <div id="navbar">
            <nav>
                <LogoAtom />
                <ButtonAtom linkurl="#home" link="Home" />
                <ButtonAtom linkurl="#skills-section" link="Skills" />
                <ButtonAtom linkurl="#about-section" link="About" />
                <ButtonAtom linkurl="#projects" link="Projects" />
                <ButtonAtom linkurl="#contact" link="Contact" />
            </nav>
            <div className="socials-links">
                <SocialsAtom link="https://github.com/claudia-lim" icon={<FontAwesomeIcon icon={faGithub} />} />
                <SocialsAtom link="https://www.linkedin.com/in/claudia-l-26669b279/" icon={<FontAwesomeIcon icon={faLinkedin}/>} />
            </div>
        </div>
    )
}

export default NavBarTemplate