import React from "react";
import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../Images/logo.png";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Flex, FlexItem, FlexModifiers } from "@patternfly/react-core";
interface PageProps {
  mainPage: boolean;
}

export const Navbar: React.FC<PageProps> = mainPage => {
  return (
    <AppBar position="static" color="inherit" className="navbar-container">
      <Toolbar>
        <Flex>
          <FlexItem>
            <img src={Logo} alt="logo" className="nav-logo" />
          </FlexItem>
          <FlexItem>
            <h2 className="nav-title">Ping</h2>
          </FlexItem>
          <FlexItem>
            <SearchIcon />
          </FlexItem>
          <FlexItem
            breakpointMods={[{ modifier: FlexModifiers["align-right"] }]}
          >
            <Button color="inherit" className="nav-link">
              Settings
            </Button>
          </FlexItem>
          <FlexItem>
            <Button color="inherit" className="nav-link">
              Login
            </Button>
          </FlexItem>
        </Flex>
      </Toolbar>
    </AppBar>
  );
};
