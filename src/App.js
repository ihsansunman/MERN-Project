import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("http://localhost:4000/api/notlar/", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDc5NmZlYjg4YzRlMTMyMDNhMmEzMCIsImlhdCI6MTY2MjcyMzc3OSwiZXhwIjoxNjY1MzE1Nzc5fQ.zR2mrQDxyn-HP2i-upbUhmMH2GqOiqHO0Rq2tIqGUTk`,
      },
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
      <p>Merhaba</p>
    </div>
  );
}

export default App;
