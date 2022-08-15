import React from "react";
import {
    Wrapper,
    Background,
    Heading,
    Container,
    ProjectTile,
} from "./styles/projects";
import { useVisibleAnimation } from "framer-motion-visible";

const Projects = () => {
    const headingAnimation = useVisibleAnimation({
        initial: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1 },
    });

    const card1Animation = useVisibleAnimation({
        initial: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
    });

    const card2Animation = useVisibleAnimation({
        initial: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
    });

    return (
        <Wrapper id="projects">
            <Background></Background>
            <Heading {...headingAnimation}>Recent Projects</Heading>
            <Container>
                <ProjectTile
                    {...card1Animation}
                    isodd="true"
                    url="images/projects/netflix.png"
                >
                    <a
                        href="https://netflix-clone-8973a.web.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="projectTitle">Netflix Clone</div>
                        <div id="viewProject">View Project</div>
                    </a>
                </ProjectTile>
                <ProjectTile
                    {...card2Animation}
                    url="images/projects/disney-plus.png"
                >
                    <a
                        href="https://disney-plus-clone-481e7.web.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="projectTitle">Disney Plus Clone</div>
                        <div id="viewProject">View Project</div>
                    </a>
                </ProjectTile>
            </Container>
        </Wrapper>
    );
};

export default Projects;
