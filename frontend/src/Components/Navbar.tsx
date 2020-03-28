import React from 'react';
import './Navbar.scss';
import { Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from '../Images/logo.png';

export default function Navbar() {
  return (
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
    </Flex>
  );
};

