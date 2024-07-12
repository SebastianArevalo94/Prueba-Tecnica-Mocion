// ComicList.js
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Button,
} from "@mui/material";

const ComicList = ({ name, image, description }) => {
  return (
    <Card sx={{ display: "flex", mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 160, height: 240 }}
        image={image}
        alt={name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            {description}...
          </Typography>
          <CardActions sx={{ display: "flex", justifyContent: "center", mt:4 }}>
            <Button variant="contained">Ver Mas</Button>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ComicList;
