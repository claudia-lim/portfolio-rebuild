import "./projectstemplate.css";
import {projects} from "../../data/projects.json"
import ProjectMolecule from "../ProjectMolecule/index.jsx";
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faCaretRight, faCircle} from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


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
            <h3>Projects Section</h3>
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
                                <a href={project.liveLink}>
                                <img src={project.src}></img></a>
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