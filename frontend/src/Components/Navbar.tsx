import React from "react";
import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../Images/logo.png";
import { AppBar, Toolbar, Button } from "@material-ui/core";

interface PageProps {
  mainPage: boolean;
}

export const Navbar: React.FC<PageProps> = mainPage => {
  return (
    <AppBar position="static" color="inherit" className="navbar-container">
      <Toolbar>
        <img src={Logo} alt="logo" className="nav-logo" />
        <h2 className="nav-title">Ping</h2>
        <div>
          <SearchIcon />
        </div>
        <Button color="inherit" className="nav-link">
          Settings
        </Button>
        <Button color="inherit" className="nav-link">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
