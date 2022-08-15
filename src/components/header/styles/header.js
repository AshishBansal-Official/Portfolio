import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Background = styled.div`
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url("images/bg_image/4.jpg");

    filter: blur(8px);
    -webkit-filter: blur(8px);
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: none;
    background-color: white;
    position: relative;
    background-color: transparent;
`;

export const Panel = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 40vw;
    max-height: 900px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: rgba(255, 255, 255, 0.1); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2vw 4vw;

    @media (max-width: 420px) {
        padding: 2vw 4vw;
    }
`;

export const Logo = styled.img`
    height: 60px;
    @media (max-width: 550px) {
        height: 50px;
    }
`;

export const NavBar = styled(motion.div)`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
`;

export const NavBarItem = styled.div`
    padding: 20px 0px;
    padding-left: 40px;
    font-weight: 400;
    font-size: 18px;
    display: inline-block;
    cursor: pointer;

    @media (max-width: 1023px) {
        padding-left: 25px;
        font-size: 17px;
    }

    @media (max-width: 550px) {
        padding-left: 16px;
        font-size: 15px;
    }

    @media (max-width: 480px) {
        padding-left: 12px;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;

export const About = styled.div`
    text-shadow: 0 1px 2px rgb(0 0 0 / 57%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span:nth-child(1) {
            color: transparent;
            text-shadow: none;
            @media (max-width: 1023px) {
                font-size: 56px;
            }
            @media (max-width: 550px) {
                font-size: 42px;
            }
        }
        span:nth-child(2) {
            position: absolute;
            top: 0;
            left: 0;
            @media (max-width: 1023px) {
                font-size: 56px;
            }
            @media (max-width: 550px) {
                font-size: 42px;
            }
        }

        a > img {
            height: 40px;
            border-radius: 10px;

            @media (max-width: 550px) {
                height: 35px;
            }
        }

        .socialsContainer {
            margin-top: 16px;
            display: flex;
            flex-direction: row;
            grid-gap: 20px;
            flex-wrap: wrap;
            justify-content: start;

            @media (max-width: 550px) {
                margin-top: 12px;
                grid-gap: 10px;
            }
        }
    }
`;
