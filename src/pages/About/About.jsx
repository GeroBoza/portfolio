import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Terminal from "../../components/Terminal/Terminal";
import "./about.scss";

const About = () => {
    const skills = [
        "javascript",
        "react",
        "node.js",
        "express",
        "aws s3",
        "nginx",
        "mysql",
        "html",
        "css",
        "material-ui",
        "bootstrap",
        "git",
        "github",
        "mongodb",
    ];
    function aboutMeText() {
        return (
            <>
                <p>
                    <span
                        style={{
                            color: "#03ffa4",
                        }}
                    >
                        geronimoboza $
                    </span>{" "}
                    cat aboutgeronimo{" "}
                </p>
                <p>
                    {/* n */}
                    I’m a full-stack developer with 3+ years of experience
                    focused on web development.
                </p>

                <p>
                    A visionary and creative problem solver. An autodidact who
                    rapidly understand new concepts, ideas, technologies and
                    methodologies.
                </p>
                <p>
                    I've been working as a web developer since 2019. And have
                    more than 5 years of previous studies in university and side
                    projects as a self learner. Learning and using technologies
                    like Git, Javascript, Node, React, MySQL, etc.
                </p>
                <p>
                    Currently, I am focusing my career on web technologies like
                    React, Node, Express, MySQL.
                </p>
            </>
        );
    }

    function skillsText() {
        return (
            <>
                <p>
                    <span
                        style={{
                            color: "#03ffa4",
                        }}
                    >
                        geronimoboza $
                    </span>{" "}
                    cd skills/tools
                </p>
                <p>
                    <span
                        style={{
                            color: "#03ffa4",
                        }}
                    >
                        skills/tools <span className="green">(main)</span> $
                    </span>{" "}
                    ls
                </p>
                <p style={{ color: "#03ffa4" }}> Skills</p>
                <ul className="skills">
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <p style={{ color: "#03ffa4" }}> Languages</p>
                <ul className="">
                    <li>Spanish (native)</li>
                    <li>English (advanced C1)</li>
                </ul>
            </>
        );
    }

    function educationText() {
        return (
            <>
                <p>
                    <span
                        style={{
                            color: "#03ffa4",
                        }}
                    >
                        geronimoboza $
                    </span>{" "}
                    cd education
                </p>
                <p>
                    <span
                        style={{
                            color: "#03ffa4",
                        }}
                    >
                        education <span className="green">(main)</span> $
                    </span>{" "}
                    ls
                </p>
                <ul>
                    <li>
                        <i>2014 - ONGOING</i>:{" "}
                        <strong style={{ color: "#03ffa4" }}>
                            BACHELOR OF SYSTEMS
                        </strong>
                        , FACULTY OF COMPUTER SCIENCE, NATIONAL UNIVERSITY OF LA
                        PLATA.
                    </li>
                    <li>
                        <i>2020 - 2024</i>:{" "}
                        <strong style={{ color: "#03ffa4" }}>
                            UNIVERSITY PROGRAMMER ANALYST
                        </strong>
                        . FACULTY OF COMPUTER SCIENCE, NATIONAL UNIVERSITY OF LA
                        PLATA
                    </li>
                    <li>
                        <i>2020 - ONGOING</i>:{" "}
                        <strong style={{ color: "#03ffa4" }}>
                            ANALYST IN INFORMATION AND COMUNICATION TECHNOLOGIES
                        </strong>
                        . FACULTY OF COMPUTER SCIENCE, NATIONAL UNIVERSITY OF LA
                        PLATA
                    </li>
                    <li>
                        <i>2020 - 2020</i>:{" "}
                        <strong style={{ color: "#03ffa4" }}>
                            FULL STACK WEB DEVELOPMENT
                        </strong>
                        , DIGITAL HOUSE
                    </li>
                </ul>
            </>
        );
    }

    return (
        <Box>
            <Box display={{ sm: "none" }}>
                <Typography
                    variant="h4"
                    fontSize={"22pt"}
                    color="white"
                    fontWeight={"bold"}
                    textAlign={"center"}
                >
                    ABOUT
                </Typography>
                <hr style={{ width: "75%", border: "1px solid grey" }} />
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                mt={"3rem"}
            >
                <Terminal text={aboutMeText()} />
                <Terminal text={skillsText()} />
                <Terminal text={educationText()} />
            </Box>
        </Box>
    );
};

export default About;
