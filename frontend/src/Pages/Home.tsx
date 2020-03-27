import React from "react";
import styled from 'styled-components';

const Title = styled.div`
  color: #3D3F70;
  font-size: 64px;
  font-family: "Open Sans";
  font-weight: bold;

  background:transparent;
  text-align:center;
`

export const Home: React.FC = () => {
  return (
    <Title>Inventory Ping</Title>
  );
};
