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
      <Flex
        className="navbar-container"
        breakpointMods={[
          { modifier: FlexModifiers["justify-content-space-between"] }
        ]}
      >
        <FlexItem>
          <Flex>
            <FlexItem>
              <h2 className="nav-title">Ping</h2>
            </FlexItem>
          </Flex>
        </FlexItem>

        <FlexItem>
          <SearchBar query="" onSearch={query => {}} />
        </FlexItem>
        <FlexItem>
          <Button color="inherit">Settings</Button>
          <Button color="inherit">Login</Button>
        </FlexItem>
      </Flex>
    );
  } else {
    return (
      <Flex
        className="navbar-container"
        breakpointMods={[
          { modifier: FlexModifiers["justify-content-space-between"] }
        ]}
      >
        <FlexItem>
          <Flex>
            <FlexItem>
              <h2 className="nav-title">Ping</h2>
            </FlexItem>
          </Flex>
        </FlexItem>

        <FlexItem>
          <Button color="inherit">Settings</Button>
          <Button color="inherit">Login</Button>
        </FlexItem>
      </Flex>
    );
  }
}
