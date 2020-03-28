import React from 'react';
import './Navbar.scss';


import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
import Logo from '../Images/logo.png';
import Search from '../Pages/Search';

interface PageProps {
  mainPage: boolean;
}

export default function Navbar() {
  return (
    <AppBar position='static' color='inherit' className='navbar-container'>
      <Toolbar>
        <Flex>
          <FlexItem>
            <img src={ Logo } alt='logo' className='nav-logo' />
          </FlexItem>
          <FlexItem>
            <h2 className='nav-title'>Ping</h2>
          </FlexItem>
          <FlexItem>
            <Search />
          </FlexItem>
          <FlexItem
            breakpointMods={ [{ modifier: FlexModifiers['align-right'] }] }
          >
            <Button color='inherit' className='nav-link butt'>
              Settings
            </Button>
          </FlexItem>
          <FlexItem>
            <Button color='inherit' className='nav-link butt'>
              Login
            </Button>
          </FlexItem>
        </Flex>
      </Toolbar>
    </AppBar>
  );
}
