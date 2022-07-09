import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, title } = props;
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box
                component={"img"}
                src={image}
                alt={"mockup"}
                sx={{ maxWidth: "100%" }}
            />
            <h1 style={{ fontSize: "2rem", color: "white" }}>{title}</h1>
            <Box
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
                        link={live}
                        title={"Visit site"}
                        icon={"fa fa-safari"}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
