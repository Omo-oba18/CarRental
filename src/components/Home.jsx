import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const ColorButton = styled(Button)(() => ({
  color: "#004aad",
  backgroundColor: "#fff",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#004aad",
  },
}));
const ColorLoginButton = styled(Button)(() => ({
  color: "#fff",
  backgroundColor: "#004aad",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#004aad",
  },
}));

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      {/* landing section start */}
      <Stack
        component="main"
        direction={{ xs: "column", md: "row" }}
        style={{
          marginTop: "6rem",
          paddingTop: "4rem",
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
        }}
      >
        <Box>
          <Typography variant={isSmallScreen ? "h3" : "h1"} marginBottom="2rem">
            The Mercedes-Benz A220 4 Matic
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }}>
            <ColorButton
              variant="contained"
              style={{
                padding: "8px 32px",
                borderRadius: 16,
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "1.5em",
              }}
            >
              Buy now
            </ColorButton>
            <ColorLoginButton
              variant="contained"
              style={{
                padding: "8px 32px",
                borderRadius: 16,
                marginRight: "1em",
                marginLeft: "1em",
                marginTop: "1.5em",
              }}
            >
              Login
            </ColorLoginButton>
          </Stack>
        </Box>
        <Box
          sx={{
            overflow: "hidden",
          }}
          height={isSmallScreen && "50vh"}
        >
          <img
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/mb-a220_8WBv4AMPc?updatedAt=1682533080532"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Stack>
      {/*  landing section end*/}
      {/* discount section start*/}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: { xs: "100%", md: "auto" },
          justifyContent: "space-between",
          height: { xs: "80vh", md: "70vh" },
        }}
        style={{
          // marginTop: "6rem",
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            paddingY="2em"
          >
            <Typography
              variant={isSmallScreen ? "h4" : "h2"}
              color="#38b6ff"
              textAlign="center"
            >
              Up to 300,000 XOF discount on a Camy LE 2017
            </Typography>
            <Button variant="outlined" color="primary">
              Shop Now
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingX: "6em",
            paddingY: "2em",
          }}
        >
          <Box
            sx={{
              borderRadius: "0 25% 0 0",
              overflow: "hidden",
            }}
          >
            <img
              src="https://ik.imagekit.io/omobaoshoffa/car_rental/11327_c521be31d0a84796b434d723905cda0e-4_25_2023__10_44_28_PM.jpg?updatedAt=1682557513980"
              alt="amg-interior-design"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Stack>
      {/* discount section end */}
      {/* Shop by category section start */}
      <Stack
        style={{
          marginTop: "2rem",
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
        }}
      >
        <Box>
          <Typography marginY={2} variant="h4" textAlign="center">
            Shop by Category
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          sx={{
            justifyContent: "sapce-between",
            display: "flex",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Card
            sx={{
              width: "100%",
              borderRadius: "0 80px 0 80px",
              height: "350px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: "100%",
              borderRadius: "0 80px 0 80px",
              height: "350px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              width: "100%",
              borderRadius: "0 80px 0 80px",
              height: "350px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Button marginY={2} variant="contained" sx={{ borderRadius: "16px" }}>
            View more
          </Button>
        </Stack>
      </Stack>
      {/* Shop by Category section end */}
      {/* Expert Support start */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
          marginTop: "2rem",
        }}
      >
        <Stack
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography marginY="1rem" variant="h4">
            Brand new cars
          </Typography>
          <Typography marginY="1rem">
            News write-ups offer a great way to let clients know about new
            products and services, events, awards, and more. News write-ups
            offer a great way to let clients know about new products and
            services, events, awards, and more.
          </Typography>
        </Stack>
        <Box
          sx={{
            borderRadius: "0 25% 0 0",
            overflow: "hidden",
          }}
        >
          <img
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/11327_c521be31d0a84796b434d723905cda0e-4_25_2023__10_44_28_PM.jpg?updatedAt=1682557513980"
            alt="amg-interior-design"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default Home;
