import React from "react";
import {
    Wrapper,
    Background,
    Heading,
    Container,
    ProjectTile,
} from "./styles/ml_projects.js";
import { useVisibleAnimation } from "framer-motion-visible";

const MLProjects = () => {
    const headingAnimation = useVisibleAnimation({
        initial: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    });

    const card1Animation = useVisibleAnimation({
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    });

    const card2Animation = useVisibleAnimation({
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    });

    return (
        <Wrapper>
            <Background></Background>
            <Heading {...headingAnimation}>Machine Learning Projects</Heading>
            <Container>
                <ProjectTile
                    {...card1Animation}
                    isodd="true"
                    url="images/ml_projects/customer-segmentation.png"
                >
                    <a
                        href="https://github.com/AshishBansal-Official/MLProject-Customer_Segmentation"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="projectTitle">Customer Segmentation</div>
                        <div id="viewProject">View Code</div>
                    </a>
                </ProjectTile>
                <ProjectTile
                    {...card2Animation}
                    url="images/ml_projects/rate-of-interest-predictor.png"
                >
                    <a
                        href="https://github.com/AshishBansal-Official/MLProject-Rate_of_Interest_Predictor"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div id="projectOverlay"></div>
                        <div id="projectTitle">Rate of Interest Predictor</div>
                        <div id="viewProject">View Code</div>
                    </a>
                </ProjectTile>
            </Container>
        </Wrapper>
    );
};

export default MLProjects;
