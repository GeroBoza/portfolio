import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Typography } from "@mui/material";

export default function Portfolio() {
    const portfolio = [
        {
            image: "/img/zapateriaavenida.png",
            live: "https://www.zapateriaavenida.com/",
            title: "Zapatería Avenida",
        },
        {
            image: "/img/estudiopereyra.png",
            live: "http://estudiopereyra.com.ar/",
            title: "Estudio Pereyra",
        },
        {
            image: "/img/alianzafrancesa.png",
            live: "https://www.alianzafrancesalp.org.ar/",
            title: "Alianza Francesa",
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
            >
                {portfolio.map((project) => (
                    <Grid item xs={12} md={4}>
                        <PortfolioBlock
                            image={project.image}
                            live={project.live}
                            title={project.title}
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
