import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { Box, Pagination, Typography, Button, Grid } from "@mui/material";
import Movie from "./Movie";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import data from "../data/Data.json";

const MainMovies = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [view, setView] = useState("grid");
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const handleMovieClick = (comic) => {
    setSelectedMovie(comic);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedMovies = data.movies.slice(startIndex, endIndex);

  return (
    <Box sx={{ m: 10, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Lista de Peliculas
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
          {slicedMovies.map((movie, index) => (
            <div
              key={index}
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: "pointer" }}
            >
              <Movie
                //name={movie.name}
                image={movie.image.medium_url}
                description={movie.description.slice(0, 100)}
              />
            </div>
          ))}
        </Box>
      ) : (
        <Grid container spacing={2}>
          {slicedMovies.map((movie, index) => (
            <Grid
              item
              xs={12}
              key={index}
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: "pointer" }}
            >
              <MovieList
                name={movie.name}
                image={movie.image.medium_url}
                description={movie.description.slice(0, 400)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <MovieDetail
        open={!!selectedMovie}
        handleClose={handleCloseModal}
        movie={selectedMovie || data.movies[0]}
      />

      <Box sx={{ display: "flex", justifyContent: "center", mt:4 }}>
        <Pagination
          count={Math.ceil(data.movies.length / rowsPerPage)}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default MainMovies;
