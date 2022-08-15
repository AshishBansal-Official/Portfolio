import React from "react";
import {
    Wrapper,
    Heading,
    Container,
    ProjectTile,
} from "./styles/mobile_app_projects";
import { useVisibleAnimation } from "framer-motion-visible";

const MobileAppProjects = () => {
    const headingAnimation = useVisibleAnimation({
        initial: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    });

    const projectsAnimation = useVisibleAnimation({
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    });

    return (
        <Wrapper>
            <Heading {...headingAnimation}>Mobile App Projects</Heading>
            <Container>
                <ProjectTile
                    {...projectsAnimation}
                    url="images/mobile_app_projects/brew-crew.jpg"
                >
                    <a
                        href="https://github.com/AshishBansal-Official/Flutter-Brew_crew"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="viewProject">View Code</div>
                    </a>
                </ProjectTile>
                <ProjectTile
                    {...projectsAnimation}
                    url="images/mobile_app_projects/grand-pool.jpg"
                >
                    <a
                        href="https://github.com/AshishBansal-Official/Flutter_grand-pool"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="viewProject">View Code</div>
                    </a>
                </ProjectTile>
            </Container>
        </Wrapper>
    );
};

export default MobileAppProjects;
