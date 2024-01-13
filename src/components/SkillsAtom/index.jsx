import './skillsatom.css';
function SkillsAtom ({icon, skillName}) {
    return (
        <div className="skill-type">
            <p className="skill-icon">{icon}</p>
            <p>{skillName}</p>
        </div>
    )
}

export default SkillsAtom