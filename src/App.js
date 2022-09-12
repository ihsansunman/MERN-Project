import { useEffect, useState } from "react";
import axios from "axios";

import Login from "./Components/Login";
import Note from "./Components/Note";
import NewNote from "./Components/NewNote";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container'

function App() {
  const token = localStorage.getItem("Token");
  const [data, setData] = useState([
    {
      baslik: "Lütfen Giriş Yapınız",
    },
  ]);

  useEffect(() => {
    if (token !== null) {
      getData();
    }
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:4000/api/notlar/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="lg">
      <p>Merhaba {data.length} adet göreviniz bulunuyor.</p>

      <Login getData={getData} />

      <Grid container spacing={2} columns={{ xs: 1, md: 12 }}>
        {data ? (
          data.map((x) => {
            return (
              <Grid item xs={1} md={3}>
                <Note
                  noteHeader={x.baslik}
                  noteBody={x.aciklama}
                  lastUpdate={x.updatedAt}
                  priority={x.oncelik}
                  id={x._id}
                  getData={getData}
                />
              </Grid>
            );
          })
        ) : (
          <></>
        )}
      </Grid>
      {token ? <NewNote token={token} getData={getData} /> : <></>}
    </Container>
  );
}

export default App;
