import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 3vw 4vw 4vw;
    background-color: #ffffff;

    @media (max-width: 768px) {
        padding: 6vw 4vw;
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    grid-gap: 40px;
`;

export const Heading = styled(motion.span)`
    font-size: 64px;
    font-weight: 600;
    color: #101b3bcc;
    margin-bottom: 40px;

    @media (max-width: 1023px) {
        font-size: 52px;
        margin-bottom: 30px;
    }

    @media (max-width: 550px) {
        font-size: 42px;
        margin-bottom: 20px;
    }
`;

export const ProjectTile = styled(motion.div)`
    width: 20%;
    max-width: 750px;
    aspect-ratio: 9/16;
    /* border-radius: 40px;
    border: 1px solid black; */
    box-shadow: 0px 0px 20px grey;
    background-image: ${({ url }) => `url(${url})`};
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;

    @media (max-width: 1919px) {
        width: 25%;
    }
    @media (max-width: 1439px) {
        width: 30%;
    }
    @media (max-width: 1023px) {
        width: 35%;
        grid-gap: 20px;
    }
    @media (max-width: 768px) {
        width: 40%;
    }
    @media (max-width: 599px) {
        width: 50%;
    }

    #projectOverlay {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0),
            rgba(16, 27, 59, 1)
        );
        /* background: #1c1d25; */
        /* background-image: linear-gradient(
            270deg,
            rgba(35, 90, 166, 0.9),
            rgba(16, 27, 59, 0.9)
        ); */
    }

    #projectTitle {
        color: white;
        font-size: 32px;
        font-weight: 900;
        position: absolute;
        bottom: 20%;
        left: 10%;
        z-index: 0;
        text-shadow: 0 0px 10px rgb(0 0 0 / 57%);
    }

    #viewProject {
        position: absolute;
        color: white;
        background-color: white;
        bottom: 10%;
        left: 15%;
        z-index: 0;
        text-shadow: 0 0px 10px rgb(0 0 0 / 57%);
        background-image: linear-gradient(270deg, #f06449, #ef3636);
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        padding: 10px;
    }
`;
