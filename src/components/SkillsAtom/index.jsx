import './skillsatom.css';
import {useState} from "react";
function SkillsAtom ({icon, skillName, link}) {

    const [hover, setHover] = useState("");

    function onMouseOver() {
        setHover("skill-hover");
    }
    function onMouseOut() {
        setHover("");
    }

    return (
        <a target="_blank" href={link}>
            <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={'skill-type ' + hover}>

                <p className="skill-icon">{icon}</p>
                <p className="skill-name">{skillName}</p>

</div>
        </a>
    )
}

export default SkillsAtom