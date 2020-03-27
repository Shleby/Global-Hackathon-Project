import React from "react";
import styled from 'styled-components';

const StyledHome = styled.div`
  text-align:center;

  .container{
    margin: auto;
    display: inline-block;
    margin-top: 180px;
    position: relative;
    
    h2 {
      color: ${props => props.theme.main};
      font-size: 50px;
      background:transparent;
      margin-bottom: 10px;
    }
    .p{
      color: ${props => props.theme.black};
      font-size: 24px;
    }
  }
`

export const Home: React.FC = () => {
  return (
    <div>
      <StyledHome>
        <div className="container">
          <h2>
            Inventory Ping
          </h2>
          <p>
            Search for much needed items in your local items in your area.
          </p>
        </div>
      </StyledHome>
    </div>
  );
};
