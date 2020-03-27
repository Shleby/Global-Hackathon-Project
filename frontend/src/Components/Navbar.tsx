import React from 'react';
import './Navbar.scss';
import { Flex, FlexItem } from '@patternfly/react-core';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from '../Images/logo.png';

export const Navbar: React.FC = () => {
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
      <FlexItem>
        <div style={{ float: 'right' }}>
          <SettingsIcon />
        </div>
      </FlexItem>
      <FlexItem>
        <div style={{ float: 'right' }}>
          <AccountCircleIcon />
        </div>
      </FlexItem>
    </Flex>
  );
};
