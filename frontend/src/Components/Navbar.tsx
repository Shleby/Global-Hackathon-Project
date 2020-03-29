import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Popover, PopoverPosition, Button } from "@patternfly/react-core";
import SearchBar from "../Pages/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";

interface PageProps {
  mainPage: boolean;
}

export default function Navbar(props: { correctScreen: Boolean }) {
  const { correctScreen } = props;
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (correctScreen) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  });

  if (showSearch) {
    return (
      <div className="navbar-container">
        <a href="/" className="nav-title">
          Ping
        </a>
        <SearchBar query="" onSearch={query => {}} />
        <div>
          <Popover
            position={"bottom"}
            headerContent={<div />}
            bodyContent={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#3d3f70",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  color: "black",
                  borderRadius: "10px",
                  backgroundColor: "#d6d6d6"
                }}
              >
                <div style={{ height: "2vh" }} />
                <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                  Dark Mode
                </h1>
                <div style={{ height: "2vh" }} />
              </div>
            }
          >
            <Button style={{ marginLeft: "10px", marginRight: "10px" }}>
              <SettingsIcon style={{ fontSize: "50px" }} />
            </Button>
          </Popover>
          <Popover
            position={"bottom"}
            headerContent={<div />}
            bodyContent={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#3d3f70",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  color: "black",
                  borderRadius: "10px",
                  backgroundColor: "#d6d6d6"
                }}
              >
                <div style={{ height: "2vh" }} />
                <a href="/login" className="nav-account">
                  <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                    Login
                  </h1>
                </a>
                <a href="/signup" className="nav-account">
                  <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                    Sign up
                  </h1>
                </a>
                <div style={{ height: "2vh" }} />
              </div>
            }
          >
            <Button style={{ marginLeft: "10px", marginRight: "10px" }}>
              <AccountCircleIcon style={{ fontSize: "50px" }} />
            </Button>
          </Popover>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar-container">
        <a href="/" className="nav-title">
          Ping
        </a>
        <div style={{ textAlign: "center" }}>
          <Popover
            position={"bottom"}
            headerContent={<div />}
            bodyContent={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#3d3f70",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  color: "black",
                  borderRadius: "10px",
                  backgroundColor: "#d6d6d6"
                }}
              >
                <div style={{ height: "2vh" }} />
                <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                  Dark Mode
                </h1>
                <div style={{ height: "2vh" }} />
              </div>
            }
          >
            <Button style={{ marginLeft: "10px", marginRight: "10px" }}>
              <SettingsIcon style={{ fontSize: "50px" }} />
            </Button>
          </Popover>
          <Popover
            position={"bottom"}
            headerContent={<div />}
            bodyContent={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderColor: "#3d3f70",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  color: "black",
                  borderRadius: "10px",
                  backgroundColor: "#d6d6d6"
                }}
              >
                <div style={{ height: "2vh" }} />
                <a href="/login" className="nav-account">
                  <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                    Login
                  </h1>
                </a>
                <a href="/signup" className="nav-account">
                  <h1 style={{ fontWeight: "lighter", textAlign: "center" }}>
                    Sign up
                  </h1>
                </a>
                <div style={{ height: "2vh" }} />
              </div>
            }
          >
            <Button style={{ marginLeft: "10px", marginRight: "10px" }}>
              <AccountCircleIcon style={{ fontSize: "50px" }} />
            </Button>
          </Popover>
        </div>
      </div>
    );
  }
}
