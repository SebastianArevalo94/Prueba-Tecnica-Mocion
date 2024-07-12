// ComicModal.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
} from "@mui/material";

const ComicDetail = ({ open, handleClose, movie }) => {
  const { name, image, description, rating, release_date} = movie;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent dividers>
        <img
          src={image.small_url ? image.small_url : ""}
          alt={name}
          style={{ width: "100%", maxHeight: 400, objectFit: "contain" }}
        />
         <Typography variant="h5" sx={{ mt: 2 }}>
          Descripcion:
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Informacion:
        </Typography>
        <TableContainer sx={{mt:3}} component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"><b>Clasificacion</b></TableCell>
                <TableCell align="center"><b>Año de lanzamiento</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell align="center">{rating}</TableCell>
              <TableCell align="center">{new Date(release_date).getFullYear()}</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ComicDetail;
