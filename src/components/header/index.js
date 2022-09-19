import React from "react";
import {
    Wrapper,
    Background,
    Panel,
    Logo,
    NavBar,
    NavBarItem,
    About,
} from "./styles/header";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

const Header = () => {
    const { text } = useTypewriter({
        words: ["I'm Ashish Bansal"],
    });
    return (
        <>
            <Wrapper id="home">
                <Background></Background>
                <Panel>
                    <NavBar
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <div>
                            <a href="#home">
                                <Logo src="images/my_logos/6.png"></Logo>
                            </a>
                        </div>
                        <div>
                            <NavBarItem>
                                <a href="#home">HOME</a>
                            </NavBarItem>
                            <NavBarItem>
                                <a href="#skills">SKILLS</a>
                            </NavBarItem>
                            <NavBarItem>
                                <a href="#projects">PROJECTS</a>
                            </NavBarItem>
                            <NavBarItem>
                                <a href="#contact">CONTACT</a>
                            </NavBarItem>
                        </div>
                    </NavBar>
                    <About>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                            >
                                HI THERE,
                            </motion.div>
                            <div
                                style={{
                                    fontSize: "64px",
                                    textTransform: "uppercase",
                                    fontWeight: "600",
                                }}
                            >
                                <span>I'm Ashish Bansal</span>
                                <span>{text}</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2 }}
                                style={{
                                    fontSize: "22px",
                                    textTransform: "uppercase",
                                }}
                            >
                                A Front End Developer
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.8 }}
                                className="socialsContainer"
                            >
                                <a href="https://github.com/AshishBansal-Official">
                                    <img
                                        src="images/home_socials/github_icon.png"
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="documents/Ashish Bansal Resume.pdf"
                                    download=""
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        textShadow:
                                            "0 0px 10px rgb(0 0 0 / 57%)",
                                        backgroundImage:
                                            "linear-gradient(270deg, #f06449, #ef3636)",
                                        boxShadow:
                                            "0px 1px 1px rgba(0, 0, 0, 0.1)",
                                        padding: "10px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    Download Resume
                                </a>
                            </motion.div>
                        </div>
                    </About>
                </Panel>
            </Wrapper>
        </>
    );
};

export default Header;
