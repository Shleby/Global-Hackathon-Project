import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
    max-width: 800px;
    margin: auto;
    background: ${props => props.theme.main};
    margin-top: 100px;
    color: white;
`;

export const Login: React.FC = () => {
    return <StyledLogin>Login</StyledLogin>;
};
