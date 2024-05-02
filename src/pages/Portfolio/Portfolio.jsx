import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Typography } from "@mui/material";

export default function Portfolio() {
    const portfolio = [
        {
            image: "/img/clara.png",
            live: "https://clara-asprella.netlify.app/",
            title: "Clara Asprella - Portfolio",
            description: "(Node.js - Express JS - React JS)",
        },
        {
            image: "/img/starwars.png",
            live: "https://sw-app-challenge.netlify.app/",
            title: "Star Wars app Challenge",
            description: "(Node.js - Express JS - React JS)",
        },
        {
            image: "/img/zapateriaavenida.png",
            live: "https://www.zapateriaavenida.com/",
            title: "Zapatería Avenida",
            description: "(Node.js - Express JS - React JS)",
        },
        {
            image: "/img/estudiopereyra.png",
            live: "http://estudiopereyra.com.ar/",
            title: "Estudio Pereyra",
            description: "(HTML - CSS - Javascript)",
        },
        {
            image: "/img/alianzafrancesa.png",
            live: "https://www.alianzafrancesalp.org.ar/",
            title: "Alianza Francesa",
            description: "(HTML - CSS - Javascript)",
        },
    ];
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
                    PORTFOLIO
                </Typography>
                <hr style={{ width: "75%", border: "1px solid grey" }} />
            </Box>
            <Grid
                container
                height={"90vh"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
                spacing={2}
            >
                {portfolio.map((project) => (
                    <Grid item xs={12} md={4} key={project.title}>
                        <PortfolioBlock
                            image={project.image}
                            link={project.live}
                            title={project.title}
                            description={project.description}
                        />
                        <Box display={{ md: "none" }}>
                            <hr
                                style={{
                                    width: "75%",
                                    border: "1px solid grey",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
