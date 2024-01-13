import ButtonAtom from "../ButtonAtom/index.jsx";
import LogoAtom from "../LogoAtom/index.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./navbar.css"
import {useState} from "react";

function NavBarTemplate() {
    const [animate, setAnimate] = useState("");
    function onMouseOver() {
        setAnimate("fa-beat");
    }

    function onMouseOut() {
        setAnimate("");
    }
    return (
        <div id="navbar">
            <nav>
                <LogoAtom />
                <ButtonAtom linkurl="#home" link="Home" />
                <ButtonAtom linkurl="#skills" link="Skills" />
                <ButtonAtom linkurl="#about" link="About" />
                <ButtonAtom linkurl="#projects" link="Projects" />
                <ButtonAtom linkurl="#contact" link="Contact" />
            </nav>
            <div className="socials-links">
                <a onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="social-icon" target="_blank" href="https://github.com/claudia-lim">
                    <FontAwesomeIcon icon={faGithub} className={animate}/>
                </a>
                <a onMouseOver={onMouseOver} onMouseOut={onMouseOut} className="social-icon" target="_blank" href="https://www.linkedin.com/in/claudia-l-26669b279/">
                    <FontAwesomeIcon icon={faLinkedin} className={animate}/>
                </a>
            </div>
        </div>
    )
}

export default NavBarTemplate