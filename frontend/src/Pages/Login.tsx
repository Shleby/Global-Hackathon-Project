import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
            margin-top: 10px;
            .rememberMe {
                position: absolute;
                left: 0;
                top: 0;
                .checkBox {
                    margin-top: -12px;
                }
            }
            .forgetPassword {
                position: absolute;
                right: 0;
                top: 0;
            }
        }
        .button {
            background: ${props => props.theme.green};
            text-transform: none !important;
            color: white !important;
            margin: 10px 0;
            padding: 5px 30px;
        }
        .input {
            width: 300px;
            margin: 8px 0;
        }
        .signUp {
            font-size: .9em;
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

export const Login: React.FC = () => {
    return (
        <StyledLogin>
            <div className="container">
                <h1>Sign In</h1>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    variant="outlined"
                    className="input"
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    variant="outlined"
                    className="input"
                />
                <div className="options">
                    <div className="rememberMe">
                        <FormControlLabel
                            control={<Checkbox name="rememberMe" color="primary" />}
                            className="checkBox"
                            label="Remember me"
                        />
                    </div>
                    <div className="forgetPassword">
                        <p>Forget password?</p>
                    </div>
                </div>
                <Button className="button" variant="contained">Sign In</Button>
                <div className="signUp">
                    <p>New here?</p>
                    <Link className="link" to="/signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </StyledLogin>
    );
};
