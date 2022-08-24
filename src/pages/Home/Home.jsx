import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SocialIcon from "../../components/SocialIcon/SocialIcon";

import "./Home.scss";

const Home = () => {
    const socialLinks = [
        { icon: "fa fa-facebook", url: "https://www.facebook.com/gero.boza" },
        { icon: "fa fa-instagram", url: "https://www.instagram.com/geroboza/" },
        { icon: "fa fa-github", url: "https://github.com/GeroBoza" },
        {
            icon: "fa fa-linkedin",
            url: "https://www.linkedin.com/in/geronimoboza/",
        },
    ];
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }} className="App-header">
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid item xs={12} md={3}>
                        <img
                            className="profilePicture"
                            src="/img/profile-photo.jpg"
                            alt=""
                        />
                    </Grid>
                    <Grid item xs={12} md={4} className="myInfo">
                        <Box>
                            <Typography variant="h3">
                                Hi, I'm <span className="name">Geronimo</span>!{" "}
                                <span className="hand">🤚🏻</span>
                            </Typography>
                            <Typography variant="h4">
                                I'm a Full Stack Developer.
                            </Typography>
                            <ul className="infoList">
                                <li>
                                    <span>🌎</span> based in Argentina
                                </li>
                                <li>
                                    <span>💻</span> advanced IT student
                                </li>
                                <li>
                                    <span>📧</span> geronimoboza@gmail.com
                                </li>
                            </ul>
                        </Box>
                        <Box
                            className="socialIcons"
                            display={"flex"}
                            gap={"1.5rem"}
                            justifyContent={"center"}
                            fontSize={{ xs: "2rem", md: "2.5rem" }}
                        >
                            {socialLinks.map((sLink) => (
                                <SocialIcon
                                    key={sLink.icon}
                                    icon={sLink.icon}
                                    link={sLink.url}
                                ></SocialIcon>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Home;
