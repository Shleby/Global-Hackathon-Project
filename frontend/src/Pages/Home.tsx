import React, { useState, useEffect } from "react";
import { Card } from "@patternfly/react-core";
import Navbar from "../Components/Navbar";
import { Bullseye } from "@patternfly/react-core";
import { Button, Icon } from "@material-ui/core";
import Logo from "../Components/rotateLogo.png";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { usePosition } from "use-position";

export const googleMapURL =
  "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDauq45knJZC8oDuNaCGGped73aHbGwelg";

export const Home: React.FC = () => {
  const { latitude, longitude, timestamp, accuracy } = usePosition(true);
  const someLatLng = { lat: latitude, lng: longitude };

  const CurrentPin = () => {
    return <img src={Logo} alt="" style={{ height: "5vh" }} />;
  };
  const iconStyle = {
    borderRadius: "100px",
    boxShadow: "3px 3px 1px #888888"
  };
  const MyGoogleMap: any = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultCenter={someLatLng}
        defaultZoom={16}
        options={{ disableDefaultUI: true }}
      >
        <CurrentPin />
      </GoogleMap>
    ))
  );
  const loadingElement: any = <div />;
  const containerElement: any = <div style={{ height: "50vh" }} />;
  const mapElement = <div style={{ height: "50vh" }} />;
  const map: any = (
    <MyGoogleMap
      loadingElement={loadingElement}
      containerElement={containerElement}
      googleMapURL={googleMapURL}
      mapElement={mapElement}
    ></MyGoogleMap>
  );
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
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Navbar correctScreen={false} />

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
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: "#3d3f70",
                color: "white"
              }}
            >
              Go
            </Button>
          </form>
          <img src={Logo} alt="" style={{ height: "10vh" }} />
        </Bullseye>
      </div>
      <Card
        style={{
          backgroundColor: "#c7cbd1",
          height: "50vh",
          marginLeft: "30px",
          width: "20%"
        }}
      >
        <h2>Nearby Stores...</h2>
      </Card>
      <Card
        style={{
          height: "50vh",
          width: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "0",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        {map}
      </Card>
    </div>
  );
};

export default Home;
