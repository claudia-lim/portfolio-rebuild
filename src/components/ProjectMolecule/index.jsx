import "./projectmolecule.css"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
function ProjectMolecule ({src, alt, name, description, liveLink, index, currentProj, projects}) {

    return (
        <div id={`project-${index}`} className={(currentProj === index) ? "project-slide" : "project-hidden"}>
            <h4>{name}</h4>
            <div className="project-card" >
                <div className="project-img">
                    <a href={liveLink} target="_blank">
                        <img src={src} alt={alt}></img>
                    </a>
                </div>
                <div className="project-text">
                    <p>{description}</p>
                    <p className="proj-links"></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectMolecule