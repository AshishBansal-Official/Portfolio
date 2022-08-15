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
    background-color: transparent;
    position: relative;

    @media (max-width: 768px) {
        padding: 6vw 4vw;
    }
`;

export const Background = styled.div`
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("images/bg_image/2.webp");
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    z-index: -1;
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
    color: white;
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
    min-height: 380px;
    aspect-ratio: 16/9;
    max-width: 1280px;
    width: 60%;
    /* margin-top: 3vw; */
    margin-right: ${({ isodd }) => (isodd ? "2vw" : "0px")};
    margin-left: ${({ isodd }) => (isodd ? "0px" : "2vw")};
    /* border-radius: 40px;
    border: 1px solid black; */
    box-shadow: 0px 0px 10px grey;
    background-image: ${({ url }) => `url(${url})`};
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media (max-width: 1283px) {
        width: 70%;
        margin-top: 2px;
    }

    @media (max-width: 1023px) {
        margin-top: 1vw;
        width: 80%;
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
            rgba(16, 27, 59, 1),
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
        font-size: 46px;
        font-weight: 900;
        position: absolute;
        bottom: 20%;
        left: 15%;
        right: 5%;
        z-index: 0;
        text-shadow: 0 0px 10px rgb(0 0 0 / 57%);
        text-align: start;

        @media (max-width: 1283px) {
            font-size: 42px;
        }

        @media (max-width: 1023px) {
            font-size: 38px;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            font-size: 32px;
            margin-bottom: 20px;
        }
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
