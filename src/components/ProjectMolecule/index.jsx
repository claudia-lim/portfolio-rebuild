import "./projectmolecule.css"
function ProjectMolecule ({src, alt, name, description, liveLink}) {
    return (
        <div className="project">
            <h4>{name}</h4>
            <a href={liveLink} target="_blank"><img src={src} alt={alt}></img></a>
            {/*<p>{description}</p>*/}
        </div>
    )
}

export default ProjectMolecule