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

const ComicDetail = ({ open, handleClose, comic }) => {
  const { name, image, description, publisher, count_of_episodes, start_year } = comic;

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
                <TableCell align="center"><b>Editor</b></TableCell>
                <TableCell align="center"><b>Episodios</b></TableCell>
                <TableCell align="center"><b>Año de lanzamiento</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell align="center">{publisher.name ? publisher.name : publisher}</TableCell>
              <TableCell align="center">{count_of_episodes}</TableCell>
              <TableCell align="center">{start_year}</TableCell>
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
