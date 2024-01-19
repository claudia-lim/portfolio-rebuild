import "./projectstemplate.css";
import {projects} from "../../data/projects.json"
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faCircle, faLink} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";


function ProjectsTemplate() {

const [currentProj, setCurrentProj] = useState(0);

    function clickLeft () {
    if (currentProj === 0) {
        setCurrentProj(projects.length - 1);
    } else {
        setCurrentProj(currentProj - 1);
    }
}

function clickRight () {
    if (currentProj === projects.length - 1) {
        setCurrentProj(0);
    } else {
        setCurrentProj(currentProj + 1);
    }
}
    return (
        <>
        <div id="projects">
            <h3>Projects</h3>
        {/*    <div className="carousel">*/}

        {/*        <button onClick={clickLeft} className="carousel-button button-left">*/}
        {/*            <FontAwesomeIcon icon={faCaretLeft}/>*/}
        {/*        </button>*/}

        {/*        {projects.map((project, index) => {*/}
        {/*            return <ProjectMolecule*/}
        {/*                src={project.src}*/}
        {/*                alt={project.alt}*/}
        {/*                name={project.name}*/}
        {/*                description={project.description}*/}
        {/*                liveLink={project.liveLink}*/}
        {/*                githubLink={project.githubLink}*/}
        {/*                index={index}*/}
        {/*                currentProj={currentProj}*/}
        {/*                key={index}*/}
        {/*                projects={projects.length}*/}
        {/*            />*/}
        {/*        })}*/}

        {/*        <button onClick={clickRight} className="carousel-button button-right">*/}
        {/*            <FontAwesomeIcon icon={faCaretRight}/>*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*    <div className="indicator-bar">*/}
        {/*        {projects.map((project, index) => {*/}
        {/*            return <div className={(currentProj === index) ? "indicator-highlighted" : ""}*/}
        {/*                        key={index}*/}
        {/*                        id={`indicator-${index}`}>*/}
        {/*                        <FontAwesomeIcon icon={faCircle}/>*/}
        {/*            </div>*/}
        {/*        })}*/}
        {/*    </div>*/}
        {/*</div>*/}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {projects.map((project, index) => {
                        return <SwiperSlide key={index}>
                            <div className="project-card-slider">
                                <h4>{project.name}</h4>
                                <a href={project.liveLink} target="_blank">
                                    <img src={project.src}></img></a>
                                <p className="tech-stack">{project.techStack}</p>
                                <p className="project-icons">
                                   <a href={project.githubLink} target="_blank">
                                       <FontAwesomeIcon icon={faSquareGithub}/>
                                   </a>
                                    <a href={project.liveLink} target="_blank">
                                        <FontAwesomeIcon icon={faLink}/>
                                    </a>
                                </p>
                                <p>{project.description}</p>

                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
        </div>
        </>
    )
}

export default ProjectsTemplate