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
                <p style={{ textAlign: "justify" }}>
                    {/* n */}
                    Hello! I'm Geronimo. I am an advanced student at the
                    National University of La Plata, Buenos Aires, Argentina.
                </p>
                <p style={{ textAlign: "justify" }}>
                    I like to develop both frontend and backend.
                </p>
                <p style={{ textAlign: "justify" }}>
                    At this moment I am improving in ReactJs but I am a person
                    willing to face new challenges
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

    // function miscText() {
    //     return (
    //         <>
    //             <p>
    //                 <span
    //                     style={{
    //                         color: "#03ffa4",
    //                     }}
    //                 >
    //                     {firstName}
    //                     {info.lastName.toLowerCase()} $
    //                 </span>{" "}
    //                 cd hobbies/interests
    //             </p>
    //             <p>
    //                 <span
    //                     style={{
    //                         color: "#03ffa4",
    //                     }}
    //                 >
    //                     hobbies/interests <span className="green">(main)</span>{" "}
    //                     $
    //                 </span>{" "}
    //                 ls
    //             </p>
    //             <ul>
    //                 {info.hobbies.map((hobby) => (
    //                     <li>
    //                         <Box component={"span"} mr={"1rem"}>
    //                             {hobby.emoji}
    //                         </Box>
    //                         {hobby.label}
    //                     </li>
    //                 ))}
    //             </ul>
    //         </>
    //     );
    // }

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
                {/* 
            <Terminal text={miscText()} /> */}
            </Box>
        </Box>
    );
};

export default About;
