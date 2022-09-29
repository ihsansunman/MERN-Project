import React, { useState } from "react";
import axios from "axios";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignUp from "./Signup";

export default function Login({ getData }) {
  const [open, setOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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

  const userLogin = () => {
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

  const userLogout = ()=>{
    localStorage.removeItem('Token')
    location.reload();
  }

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          {localStorage.getItem("Token") ? (
            <IconButton color="inherit" onClick={userLogout}>
            <LogoutIcon />
          </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleOpen}>
              <LoginIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" onClick={()=> setSignOpen(true)}>
            <PersonAdd />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Giriş</Typography>
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
          <Button variant="contained" onClick={() => userLogin()}>
            Giriş
          </Button>
        </Box>
      </Modal>

      <SignUp signOpen={signOpen} close={()=> setSignOpen(false)}/>
    </>
  );
}
