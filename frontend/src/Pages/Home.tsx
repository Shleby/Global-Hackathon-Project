import React from 'react';
import styled from 'styled-components';
import { SearchBar } from '../Components/SearchBar'
import { Navbar } from '../Components/Navbar'

const StyledHome = styled.div`
  text-align:center;

  .container{
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    h2 {
      color: ${(props) => props.theme.main};
      font-size: 64px;
      background:transparent;
      margin-bottom: 10px;
    }
    .subtitle{
      color: ${(props) => props.theme.black};
      font-size: 20px;
      margin-bottom: 50px;
    }
  }
`

const Home: React.FC = () => {
  return (
    <div>
      <Navbar mainPage />
      <StyledHome>
        <div className='container'>
          <h2>
            Inventory Ping
          </h2>
          <div className='subtitle'>
            Search for much needed items in your local items in your area.
          </div>
          <SearchBar />
        </div>
      </StyledHome>
    </div>
  );
};

export default Home;
