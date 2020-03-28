import React from 'react';
import './Navbar.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Logo from '../Images/logo.png';
import {SearchBar} from "./SearchBar"
import styled from 'styled-components'


interface PageProps {
  mainPage: boolean,
}

const StyledNavbar = styled.div`
  height: 5vh;
  width: 100%;
  background-image: linear-gradient(to bottom, #ffffff 90%, #DDDDDD 100%);
  margin-top: 2%;

  display: flex;
  .logo-container{
    //border: 1px green solid;
    display: flex;
    width: 100%;
    img{

    }
    .nav-title{
      
    }
  }
  .search-bar{
    width: 100%;
  }
  .nav-icons-container{
    width: 90%;
    margins: auto;
    display: flex;
    justify-content: flex-end;
    .nav-icons{
      height: 100%;
    }
  }
`

function checkPage(mainPage: boolean){
  if(!mainPage)
  return <SearchBar />
}

export const Navbar: React.FC<PageProps> = (mainPage) => {
  return (

    <StyledNavbar>
      <div className="logo-container">
        <img src={ Logo } alt='Ping-Logo' className='nav-logo' />
        
        <a href='/' className='nav-title'>
            Ping
        </a>
      </div>
      <div className = "search-bar">
      <SearchBar />
   
      </div>
      <div className="nav-icons-container">
        <div className='nav-icons'>
            <SettingsIcon />
            <AccountCircleIcon />
        </div>
      </div>
    </StyledNavbar>
  );
};
