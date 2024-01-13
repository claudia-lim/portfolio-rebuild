import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faGit, faHtml5, faJs, faNodeJs, faPhp, faReact} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faS, faT} from "@fortawesome/free-solid-svg-icons";
import SkillsAtom from "../SkillsAtom/index.jsx";
import './skills.css';

function SkillsTemplate () {

    return (
        <div>
            <h3>Skills Section</h3>
            <div id="skills">
                <SkillsAtom icon={<FontAwesomeIcon icon={faPhp} />} skillName="PHP"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faJs}/>}  skillName="Javascript"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faReact} />} skillName="React" />
                <SkillsAtom icon={<FontAwesomeIcon icon={faNodeJs} />} skillName="NodeJS"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faHtml5} />} skillName="HTML"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faCss3Alt} />} skillName="CSS"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faDatabase} />} skillName="MySQL"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faDatabase} />} skillName="MongoDB"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faGit} />} skillName="Git"/>
            </div>
        </div>
    )
}

export default SkillsTemplate