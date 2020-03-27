import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogin = styled.div`
    text-align: center;
    .container {
        margin: auto;
        display: inline-block;
        margin-top: 180px;
        position: relative;
        color: ${props => props.theme.black};
        h1 {
            text-align: left;
            color: ${props => props.theme.main};
            margin-bottom: 15px;
        }
        .options {
            position: relative;
            height: 20px;
            .rememberMe {
                position: absolute;
                left: 0;
                top: 0;
                label {
                    margin-left: 5px;
                }
            }
            .forgetPassword {
                position: absolute;
                right: 0;
                top: 0;
            }
        }
        .signUp {
            margin-top: 10px;
            .link {
                display: inline-block;
                margin-left: 5px;
            }
            p {
                display: inline-block;
            }
        }
    }
`;

const Field = styled.input`
    width: 300px;
    margin: 5px 0;
`;

const Button = styled.button`
    margin-top: 10px;
`;

export const Login: React.FC = () => {
    return (
        <StyledLogin>
            <div className="container">
                <h1>Sign In</h1>
                <Field />
                <br />
                <Field />
                <div className="options">
                    <div className="rememberMe">
                        <input type="checkbox" name="vehicle1" />
                        <label htmlFor="vehicle1">Remember me</label>
                    </div>
                    <div className="forgetPassword">
                        <p>Forget password?</p>
                    </div>
                </div>
                <Button>Sign In</Button>
                <div className="signUp">
                    <p>New here?</p>
                    <Link className="link" to="/signup">Sign Up</Link>
                </div>
            </div>
        </StyledLogin>
    );
};
