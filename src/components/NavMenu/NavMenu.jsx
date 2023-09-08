import { React, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";

import "./navMenu.scss";

const pages = [
    { name: "Home", url: "/", active: "home" },
    { name: "About me", url: "/about", active: "about" },
    { name: "Portfolio", url: "/portfolio", active: "portfolio" },
];

const NavMenu = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [activeItem, setActiveItem] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (url, active) => {
        handleCloseNavMenu();
        setActiveItem(active);
        navigate(url);
    };

    useEffect(() => {
        if (location.pathname !== "/") {
            const loc = location.pathname.replace("/", "");
            setActiveItem(loc);
        } else {
            setActiveItem("home");
        }
    }, []);

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1f1f1f",
                boxShadow: "none",
            }}
        >
            <Container maxWidth="md">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={() =>
                                        handleNavigate(page.url, page.active)
                                    }
                                    // className={
                                    //     activeItem === page.active && "active"
                                    // }
                                >
                                    <Typography textAlign="center">
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "space-around",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() =>
                                    handleNavigate(page.url, page.active)
                                }
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontWeight: "bold",
                                }}
                            >
                                {page.name}
                                <div
                                    className={
                                        activeItem === page.active
                                            ? "active"
                                            : ""
                                    }
                                ></div>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavMenu;
