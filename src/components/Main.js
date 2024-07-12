import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Box, Pagination, Typography, Button, Grid } from "@mui/material";
import Comic from "./Comics/Comic";
import ComicList from "./Comics/ComicList";
import ComicDetail from "./Comics/ComicDetail";
import data from "./data/Data.json";

const Main = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [view, setView] = useState("grid");
  const [selectedComic, setSelectedComic] = useState(null);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const switchToGrid = () => {
    setView("grid");
  };

  const switchToList = () => {
    setView("list");
  };

  const handleComicClick = (comic) => {
    setSelectedComic(comic);
  };

  const handleCloseModal = () => {
    setSelectedComic(null);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedComics = data.comics.slice(startIndex, endIndex);

  return (
    <Box sx={{ m: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Lista de Comics
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Button
          variant={view === "grid" ? "contained" : "outlined"}
          onClick={switchToGrid}
          sx={{ mr: 1 }}
        >
          Vista de Grilla
        </Button>
        <Button
          variant={view === "list" ? "contained" : "outlined"}
          onClick={switchToList}
        >
          Vista de Lista
        </Button>
      </Box>

      {view === "grid" ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {slicedComics.map((comic, index) => (
            <div
              key={index}
              onClick={() => handleComicClick(comic)}
              style={{ cursor: "pointer" }}
            >
              <Comic
                name={comic.name}
                image={comic.image.medium_url}
                description={comic.description.slice(0, 100)}
              />
            </div>
          ))}
        </Box>
      ) : (
        <Grid container spacing={2}>
          {slicedComics.map((comic, index) => (
            <Grid
              item
              xs={12}
              key={index}
              onClick={() => handleComicClick(comic)}
              style={{ cursor: "pointer" }}
            >
              <ComicList
                name={comic.name}
                image={comic.image.medium_url}
                description={comic.description.slice(0, 400)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <ComicDetail
        open={!!selectedComic}
        handleClose={handleCloseModal}
        comic={selectedComic || data.comics[0]}
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt:4 }}>
        <Pagination
          count={Math.ceil(data.comics.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Main;
