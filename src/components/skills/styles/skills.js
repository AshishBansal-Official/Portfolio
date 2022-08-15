import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 2vw 4vw;
    background-color: #ffffff;

    @media (max-width: 1919px) {
        padding: 4vw 4vw;
    }

    @media (max-width: 768px) {
        padding: 6vw 4vw;
    }
`;

export const Container = styled(motion.div)`
    width: 100%;
    padding: 10px 14vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 1023px) {
        padding: 10px 6vw;
    }

    @media (max-width: 550px) {
        padding: 0px 3vw 10px;
    }
`;

export const Heading = styled(motion.span)`
    font-size: 64px;
    font-weight: 600;
    text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    color: #101b3bcc;

    @media (max-width: 1023px) {
        font-size: 52px;
    }

    @media (max-width: 550px) {
        font-size: 42px;
    }
`;

export const SkillsButton = styled(motion.span)`
    margin: 20px 20px 0px 0;
    padding: 10px 15px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

    @media (max-width: 550px) {
        margin: 20px 10px 0px 0;
        padding: 10px 10px;
        font-size: 14px;
    }

    img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }
`;
