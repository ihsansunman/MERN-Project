import React, { useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function NewNote({ getData }) {
  const [open, setOpen] = useState(false);
  const [noteHeader, setNoteHeader] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [notePriority, setNotePriority] = useState(3);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const postNote = (noteHeader, noteBody, notePriority) => {
    axios
      .post(
        "http://localhost:4000/api/notlar/",
        {
          baslik: noteHeader,
          aciklama: noteBody,
          oncelik: notePriority,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      )
      .then(function () {
        getData()
        setOpen(false)
      });
  };

  return (
    <Box>
      <SpeedDial
        ariaLabel="New Note"
        onClick={handleOpen}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      />
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6">Yeni Not Ekle</Typography>
          <TextField
            label="Başlık"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={(e) => setNoteHeader(e.target.value)}
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={(e) => setNoteBody(e.target.value)}
          />
          <Select
            value={notePriority}
            fullWidth
            onChange={(e) => setNotePriority(e.target.value)}
          >
            <MenuItem value={3}>Az Öncelikli</MenuItem>
            <MenuItem value={2}>Öncelikli</MenuItem>
            <MenuItem value={1}>Yüksek Öncelikli</MenuItem>
          </Select>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => postNote(noteHeader, noteBody, notePriority)}
          >
            Ekle
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
