import React from "react";
import IconLink from "./IconLink";
import { Box, Typography } from "@mui/material";
import "./Portfolio.scss";

function PortfolioBlock(props) {
    const { image, link, title, description } = props;

    return (
        <Box
            className="portfolio-item"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingBottom={"30px"}
        >
            <a target="_blank" rel="noreferrer" href={link}>
                <Box
                    component={"img"}
                    src={image}
                    alt={"mockup"}
                    sx={{ maxWidth: "100%" }}
                />
                <h1 style={{ fontSize: "2rem", color: "white" }}>{title}</h1>
                <Typography variant="p" color="white">
                    {description}
                </Typography>
            </a>

            {/* <Box
                className={"portfolio"}
                display={"flex"}
                flexDirection={"column"}
                gap={"0.5rem"}
                alignItems={"center"}
                fontSize={"1.5rem"}
                py={"2rem"}
                sx={{ paddingTop: "none" }}
            >
                <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
                    <IconLink
                        link={link}
                        title={"Visit site"}
                        icon={"fa fa-safari"}
                    />
                </Box>
            </Box> */}
        </Box>
    );
}

export default PortfolioBlock;
