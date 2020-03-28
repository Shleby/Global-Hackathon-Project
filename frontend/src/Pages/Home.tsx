import React from "react";
import styled from "styled-components";

import { Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, GridItem } from "@patternfly/react-core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    top: "15%",
    left: "20px"
  },
  containerTitle: {
    margin: "auto",
    display: "inline-block",
    "margin-top": "180px",
    position: "relative",
    color: "#3d3f70",
    "font-weight": "bold"
  }
}));

const StyledHome = styled.div`
  text-align: center;

  .container {
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    hr {
      width: 100%;
    }
    h2 {
      color: ${props => props.theme.main};
      font-size: 64px;
      background: transparent;
      margin-bottom: 10px;
    }
    .subtitle {
      color: ${props => props.theme.black};
      font-size: 20px;
      margin-bottom: 50px;
    }
  }
`;

const Home: React.FC = () => {
  return (
    <div>
      <StyledHome>
        <div className="container">
          <h2>Inventory Ping</h2>
          <hr />
          <form className={classes.form} noValidate>
            <Grid>
              <GridItem sm={12} md={12} lg={12} xl={12}>
                <Typography variant="subtitle2">
                  We need your Zip Code to get stores near you
                </Typography>
              </GridItem>
              <GridItem sm={12} md={12} lg={12} xl={12}>
                <TextField
                  variant="outlined"
                  name="Search..."
                  label="Search..."
                  type="search"
                  id="search"
                  autoComplete="search"
                />

                <TextField
                  variant="outlined"
                  name="zipCode"
                  label="Zip Code"
                  type="zipCode"
                  id="zipCode"
                  autoComplete="postal-code"
                />

                <p>Within ...</p>
                <select id="miles">
                  <option value="25">25 miles</option>
                  <option value="50">50 miles</option>
                  <option value="100">100 miles</option>
                </select>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Go
                </Button>
              </GridItem>
            </Grid>
          </form>
        </div>
      </StyledHome>
    </div>
  );
};

export default Home;
