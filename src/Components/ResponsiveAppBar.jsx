import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

const pages = ["About Me", "Projects"];

function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar>
            <Container maxWidth="xl" sx={{backgroundColor: "#4a4a4a"}}>
                <Toolbar sx={{backgroundColor: "#FAEBD7", color: "#4a4a4a"}}>
                    <CottageRoundedIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, 
                            color: "#4a4a4a", 
                            fontWeight:"bold",
                            display: "block"
                            }} >
                            {page}
                        </Button>
                        ))}
                    </Box>
                    <Box sx={{textAlign: "right",
                        padding: 2,
                        fontWeight: "bold",
                        display: "block",
                        variant: "contained",
                        width: "fit-content",}}>
                        Daniel Bocash / Senior Software Developer
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
