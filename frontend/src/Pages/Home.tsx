import React, { useState, useEffect } from "react";
import { Grid, GridItem, Card } from "@patternfly/react-core";
import Navbar from "../Components/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import { Bullseye } from "@patternfly/react-core";
import { Button } from "@material-ui/core";
import { geolocated } from "react-geolocated";

interface GeoProps {
  label: string;
}

const Home: React.FC = GeoProps => {
  const [enter, setEnter] = useState();
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  function handleInputChange(event: any) {
    const que = event.target.value;
    setQuery(que);
    // this.setState(prevState => {
    //   const filteredData = prevState.data.filter(element => {
    //     return element.name.toLowerCase().includes(query.toLowerCase());
    //   });

    //   return {
    //     query,
    //     filteredData
    //   };
    // });
  }
  useEffect(() => {
    fetch("./jsonFolder/fakeInventory.json")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(() => setError(true));
  });
  return 
    <div style={{ height: "100vh", width: "100%" }}>
      <Navbar />
      {geolocated}
      <h1
        style={{
          textAlign: "center",
          color: "#3d3f70",
          fontSize: "63px",
          marginTop: "2vh"
        }}
      >
        Inventory Ping
      </h1>
      <div
        style={{
          height: "10vh"
        }}
      >
        <Bullseye>
          <form
            style={{
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: "black",
              borderRadius: "20px"
            }}
          >
            <input
              style={{
                color: "#3d3f70",
                border: "none",
                marginLeft: "5px"
              }}
              placeholder="Search for..."
              value={query}
              onChange={e => handleInputChange(e)}
            />

            <input
              style={{
                color: "#3d3f70",
                border: "none",
                marginLeft: "5px"
              }}
              placeholder="Zip code..."
              value={query}
              onChange={e => handleInputChange(e)}
            />
            <Button>Go</Button>
          </form>
        </Bullseye>
      </div>
      <Grid>
        <GridItem sm={2} md={2} lg={2} xl={2}>
          <Card style={{ backgroundColor: "wheat", height: "87vh" }}>
            <h2>Nearby Stores...</h2>
          </Card>
        </GridItem>
        <GridItem sm={10} md={10} lg={10} xl={10}></GridItem>
      </Grid>
    </div>
  );
};

export default Home;
