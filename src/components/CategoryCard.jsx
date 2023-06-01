import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CategoryCard = () => {
  return (
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
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/crv-honda?updatedAt=1683202338308"
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
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/2024_Toyota_GrandHighlander_StormCloud_001-scaled.jpg?updatedAt=1683202340296"
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
            src="https://ik.imagekit.io/omobaoshoffa/car_rental/bmw-218?updatedAt=1683202334972"
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
  );
};

export default CategoryCard;
