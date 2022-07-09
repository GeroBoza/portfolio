import { Box } from "@mui/system";
import React from "react";
import "./terminal.scss";

const Terminal = (props) => {
    const { text } = props;

    return (
        <Box
            component={"section"}
            className="terminal shadowed"
            width={{ xs: "80%", md: "50%" }}
            borderRadius={"0.5rem"}
            mb={"4rem"}
        >
            <Box
                sx={{ backgroundColor: "#8c8c8c" }}
                p={"0.5rem"}
                borderRadius={"0.5rem 0.5rem 0 0"}
                fontSize={"1rem"}
            >
                <i className="fa fa-circle red" />
                <i className="fa fa-circle amber" />
                <i className="fa fa-circle green" />
            </Box>
            <Box
                py={{ xs: "1rem", md: "2rem" }}
                px={{ xs: "2rem", md: "3rem" }}
                borderRadius={"0 0 0.5rem 0.5rem"}
                sx={{ backgroundColor: "#27242f" }}
                fontSize={"1.5rem"}
                fontFamily={"Courier New, Courier, monospace"}
            >
                {text}
            </Box>
        </Box>
    );
};

export default Terminal;
