import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";
import Networking from "./Networking.js";
import "./Header.css";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  let navigate = useNavigate();
  const networking = new Networking();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  async function handleUserLogout() {
    const response = await networking.logUserOut();
    if (response.response) navigate("/login", 250);
  }

  function handleSearchButtonClick() {
    setTimeout(() => navigate("/"), 250);
  }

  function handleHistoryButtonClick() {
    setTimeout(() => navigate("/history"), 250);
  }

  return (
    <div className="header-wrapper">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AccountBalanceIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              WORLD BANK
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <MenuItem
                  key={"Search"}
                  onClick={e => {
                    handleCloseNavMenu();
                    handleSearchButtonClick();
                  }}
                >
                  <Typography textAlign="center">{"Search"}</Typography>
                </MenuItem>
                <MenuItem
                  key={"History"}
                  onClick={e => {
                    handleCloseNavMenu();
                    handleHistoryButtonClick();
                  }}
                >
                  <Typography textAlign="center">{"History"}</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AccountBalanceIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              World Bank
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key={"Search"}
                onClick={e => {
                  handleCloseNavMenu();
                  handleSearchButtonClick();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"Search"}
              </Button>
              <Button
                key={"History"}
                onClick={e => {
                  handleCloseNavMenu();
                  handleHistoryButtonClick();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {"History"}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <LogoutIcon sx={{ color: "white" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key={"logout"}
                  onClick={e => {
                    handleCloseUserMenu();
                    handleUserLogout();
                  }}
                >
                  <Typography textAlign="center">logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;
