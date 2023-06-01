import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useEffect } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RideTo = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);

  console.log(map);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log("Error getting current location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  // const handleLocationClick = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setPosition({ lat: latitude, lng: longitude });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <Stack style={{ position: "relative" }}>
        <GoogleMap
          mapContainerStyle={{ height: "100vh", width: "100vw" }}
          center={position}
          zoom={6}
          onLoad={handleMapLoad}
        >
          {position && <Marker position={position} />}
        </GoogleMap>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            position: "absolute",
            top: "100px",
            left: "2rem",
            zIndex: 1,
            backgroundColor: "primary.main",
            padding: "2rem",
            height: "80vh",
            width: "300px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://ik.imagekit.io/omobaoshoffa/car_rental/ride-or-buy-logo-pink.png?updatedAt=1685091090692"
              alt="logo"
              width="80%"
            />
          </Stack>

          <Typography variant="h4" textAlign="center">
            Choose a trip
          </Typography>
          <Stack>
            <TextField
              id="input-with-icon-textfield"
              label="From"
              placeholder="where are you right now?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonPinIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={{
                marginY: ".5rem",
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#fff",
                },
              }}
            />
            <TextField
              id="input-with-icon-textfield"
              label="To"
              placeholder="where are you heading to?"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceIcon />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              sx={{
                marginY: ".5rem",
                "& .MuiInputLabel-root": {
                  color: "#fff",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#fff",
                },
              }}
            />
            <Button
              variant="outlined"
              startIcon={
                <AccessTimeFilledIcon sx={{ backgroundColor: "#7F669D" }} />
              }
              endIcon={<ExpandMoreIcon sx={{ backgroundColor: "#7F669D" }} />}
              sx={{
                backgroundColor: "#fff",
                marginY: "1rem",
                borderRadius: "20px",
              }}
            >
              Leave now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LoadScript>
  );
};

export default RideTo;
