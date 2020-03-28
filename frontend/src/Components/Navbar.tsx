import React from 'react';
import './Navbar.scss';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from '../Images/logo.png';
import styled from 'styled-components'


interface PageProps {
  mainPage: boolean,
}

const StyledNavbar = styled.div`
  height: 6vh;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: thin;
  display: flex;
  background-color: rgb(194, 194, 194);

  img{
    
  }
  .nav-title{
    color: #3d3f70;
    margin: 0;
    text-decoration: none;
    font-size: 5vh;
  }
`

export const Navbar: React.FC<PageProps> = (mainPage) => {
  return (

    <StyledNavbar>
      <img src={ Logo } alt='Ping-Logo' className='nav-logo' />
    
      <a href='/' className='nav-title'>
          Ping
      </a>
      
    </StyledNavbar>
    /*
    <Flex className='navbar-container'>
      <FlexItem>
        <img src={ Logo } alt='Ping-Logo' className='nav-logo' />
      </FlexItem>
      <FlexItem>
        <a href='/' className='nav-title'>
          Ping
        </a>
      </FlexItem>
      <FlexItem />
      <FlexItem breakpointMods={ [{ modifier: FlexModifiers['align-right'] }] }>
        <div className='nav-icons'>
          <SettingsIcon />
        </div>
      </FlexItem>

      <FlexItem>
        <div className='nav-icons'>
          <AccountCircleIcon />
        </div>
      </FlexItem>
    </Flex>*/
  );
};