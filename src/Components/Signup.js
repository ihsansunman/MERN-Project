import React, { useState } from "react";
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

export default function SignUp({signOpen, close}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const RegisterLogin = () => {
    axios
      .post("http://localhost:4000/api/kullanicilar/login", {
        kullaniciAd: username,
        parola: password,
        email: email,
      })
      .then(function (response) {
        localStorage.setItem("Token", response.data.token);
      })
      .then(function () {
        getData();
        setOpen(false);
      });
  };

  return (
    <div>
      <Modal open={signOpen} onClose={close}>
        <Box sx={style}>
          <Typography variant="h6">Kayıt Ol</Typography>
          <TextField
            label="Kullanıcı Adı"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="E-Mail"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Şifre"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained">Kayıt Ol</Button>
        </Box>
      </Modal>
    </div>
  );
}
