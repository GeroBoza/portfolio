import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";

export default function Portfolio() {
    const portfolio = [
        {
            image: "/img/mock1.png",
            live: "https://www.zapateriaavenida.com/",
            title: "Project 1",
        },
        {
            image: "/img/mock2.png",
            live: "http://estudiopereyra.com.ar/",
            title: "Project 2",
        },
        {
            image: "/img/mock3.png",
            live: "https://www.alianzafrancesalp.org.ar/",
            title: "Project 3",
        },
    ];
    return (
        <Box>
            <Grid
                container
                height={"90vh"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"center"}
            >
                {portfolio.map((project) => (
                    <Grid item xs={12} md={4}>
                        <PortfolioBlock
                            image={project.image}
                            live={project.live}
                            title={project.title}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
