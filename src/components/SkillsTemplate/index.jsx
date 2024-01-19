import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3Alt, faGit, faHtml5, faJs, faNodeJs, faPhp, faReact} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faDiagramProject, faT} from "@fortawesome/free-solid-svg-icons";
import SkillsAtom from "../SkillsAtom/index.jsx";
import './skills.css';

function SkillsTemplate () {

    return (
        <div id="skills-section">
            <h3 className="skills-title">Skills</h3>
            <div id="skills">
                <SkillsAtom icon={<FontAwesomeIcon icon={faPhp} />} skillName="PHP" link="https://github.com/claudia-lim?tab=repositories&q=&type=&language=php&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faT} />} skillName="Typescript" link="https://github.com/claudia-lim?tab=repositories&q=&type=&language=typescript&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faJs}/>}  skillName="Javascript" link="https://github.com/claudia-lim?tab=repositories&q=&type=&language=javascript&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faReact} />} skillName="React" link="https://github.com/claudia-lim?tab=repositories&q=react&type=&language=&sort=" />
                <SkillsAtom icon={<FontAwesomeIcon icon={faNodeJs} />} skillName="NodeJS" link="https://github.com/claudia-lim?tab=repositories&q=node&type=&language=&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faHtml5} />} skillName="HTML" link="https://github.com/claudia-lim?tab=repositories&q=&type=&language=html&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faCss3Alt} />} skillName="CSS" link="https://github.com/claudia-lim?tab=repositories&q=&type=&language=css&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faDatabase} />} skillName="MySQL" link="https://github.com/claudia-lim?tab=repositories&q=mysql&type=&language=&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faDatabase} />} skillName="MongoDB" link="https://github.com/claudia-lim?tab=repositories&q=mongodb&type=&language=&sort="/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faGit} />} skillName="Git"/>
                <SkillsAtom icon={<FontAwesomeIcon icon={faDiagramProject} />} skillName="Agile" />
            </div>
        </div>
    )
}

export default SkillsTemplate