import "./projectstemplate.css";
import {projects} from "../../data/projects.json"
import ProjectMolecule from "../ProjectMolecule/index.jsx";

function ProjectsTemplate() {
// const projects = [{name: "test", src: ""}, {name: "test2", src: ""}]

    console.log(projects);
    return (
        <div id="projects">
            <h3>Projects Section</h3>
            <div className="experiment-scroll">
                {projects.map((project, index) => {
                    return <ProjectMolecule
                        src={project.src}
                        alt={project.alt}
                        name={project.name}
                        description={project.description}
                        liveLink={project.liveLink}
                        githubLink={project.githubLink}
                        key={index}/>
                })}
            </div>
        </div>
    )
}

export default ProjectsTemplate