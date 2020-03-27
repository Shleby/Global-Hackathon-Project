import React from "react";
import styled from 'styled-components';

const Title = styled.div`
  color: #3D3F70;
  font-size: 64px;
  font-weight: bold;

  background:transparent;
  text-align:center;
`

const SubTitle = styled.div`
  color: #1D1D1D;
  font-size: 24px;
  
  text-align:center;
`

export const Home: React.FC = () => {
  return (
    <div>
      <Title>Inventory Ping</Title>
      <SubTitle>Search for much needed local items in your area.</SubTitle>
    </div>
  );
};
