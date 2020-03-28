import React, { useState } from "react";

import { Navbar } from "../Components/Navbar";
import { Typography, Button } from "@material-ui/core";
import { Grid, GridItem, TextInput } from "@patternfly/react-core";

const Home: React.FC = () => {
  const [submittedValue, setSubmittedValue] = useState("");
  function handleInputChange(value: any) {
    setSubmittedValue(value);
  }
  return (
    <div>
      <Navbar mainPage={true} />
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Inventory Ping</h2>

        <form noValidate>
          <Grid>
            <GridItem sm={12} md={12} lg={12} xl={12}>
              <Typography variant="subtitle2">
                We need your Zip Code to get stores near you
              </Typography>
            </GridItem>
            <GridItem sm={12} md={12} lg={12} xl={12}>
              <TextInput
                value={submittedValue}
                type="text"
                onChange = (() => {handleInputChange(submittedValue)})
                aria-label="text input example"
              />

              <TextInput
                value={submittedValue}
                type="text"
                onChange={handleInputChange(submittedValue)}
                aria-label="text input example"
              ></TextInput>

              <p>Within ...</p>
              <select id="miles">
                <option value="25">25 miles</option>
                <option value="50">50 miles</option>
                <option value="100">100 miles</option>
              </select>
              <Button type="submit" variant="contained" color="primary">
                Go
              </Button>
            </GridItem>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Home;
