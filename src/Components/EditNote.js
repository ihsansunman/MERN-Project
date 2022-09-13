import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

export default function EditNote({editOpen, editClose, noteHeader, noteBody}) {
  return (
    <div>
      <Modal open={editOpen} onClose={editClose}>
        <Box sx={style}>
          <Typography variant="h6">Not Düzenle</Typography>
          <TextField
            label="Başlık"
            variant="outlined"
            margin="dense"
            value={noteHeader}
            fullWidth
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Açıklama"
            variant="outlined"
            margin="dense"
            value={noteBody}
            fullWidth
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained">Düzenle</Button>
        </Box>
      </Modal>
    </div>
  );
}
