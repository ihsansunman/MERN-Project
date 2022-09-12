import { useEffect, useState } from "react";
import axios from "axios";

import Login from "./Components/Login";

function App() {
  // const [token, setToken] = useState("");
  const token = localStorage.getItem('Token')
  const [data, setData] = useState([
    {
      baslik: "Veri Yok",
    },
  ]);

  useEffect(() => {
    if(token !== null){
    getData()
  }
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:4000/api/notlar/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
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
    <div className="App">
      <p>Merhaba</p>

      <Login  getData={getData}/>

      {data ? (
        data.map((x) => {
          return <p key={x._id}>{x.baslik}</p>;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
