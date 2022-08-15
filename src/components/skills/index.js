import React from "react";
import { Wrapper, Container, Heading, SkillsButton } from "./styles/skills";
import { useVisibleAnimation } from "framer-motion-visible";

const skills_data = [
    {
        name: "Html5",
        url: "images/skills/html5.svg",
    },
    {
        name: "CSS3",
        url: "images/skills/css3.svg",
    },
    {
        name: "JavaScript",
        url: "images/skills/javascript.svg",
    },
    {
        name: "ReactJS",
        url: "images/skills/reactjs.svg",
    },
    {
        name: "Node",
        url: "images/skills/nodejs.png",
    },
    {
        name: "Express",
        url: "images/skills/expressjs.png",
    },
    {
        name: "Firebase",
        url: "images/skills/firebase.svg",
    },
    {
        name: "MongoDB",
        url: "images/skills/mongodb.png",
    },
    {
        name: "MySQL",
        url: "images/skills/mysql.svg",
    },
    {
        name: "Sass",
        url: "images/skills/sass.svg",
    },
    {
        name: "Git",
        url: "images/skills/git.svg",
    },
    {
        name: "Python",
        url: "images/skills/python.svg",
    },
    {
        name: "Java",
        url: "images/skills/java.svg",
    },
    {
        name: "C++",
        url: "images/skills/c++.svg",
    },
    {
        name: "Flutter",
        url: "images/skills/flutter.svg",
    },
];

const Skills = () => {
    const headingAnimation = useVisibleAnimation({
        initial: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 1 },
    });

    const buttonsAnimation = useVisibleAnimation({
        initial: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    });

    return (
        <Wrapper id="skills">
            <Heading {...headingAnimation}>Skills</Heading>
            <Container {...buttonsAnimation}>
                {skills_data.map((skill, index) => {
                    return (
                        <SkillsButton key={index}>
                            <img src={skill.url} alt="" />
                            {skill.name}
                        </SkillsButton>
                    );
                })}
            </Container>
        </Wrapper>
    );
};

export default Skills;
