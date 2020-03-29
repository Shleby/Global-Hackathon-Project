import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Flex, FlexItem, FlexModifiers } from "@patternfly/react-core";
import SearchBar from "../Pages/Search";
import { Button } from "@material-ui/core";

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
          <a
            href="/settings"
            style={{
              marginLeft: "10px",
              textDecoration: "none"
            }}
          >
            Settings
          </a>
          <a
            href="/login"
            style={{
              marginLeft: "10px",
              textDecoration: "none",
              marginRight: "10px"
            }}
          >
            Login
          </a>
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
          <a
            href="/settings"
            style={{
              marginLeft: "10px",
              textDecoration: "none"
            }}
          >
            Settings
          </a>
          <a
            href="/login"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              textDecoration: "none"
            }}
          >
            Login
          </a>
        </div>
      </div>
    );
  }
}
