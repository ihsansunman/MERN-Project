import React, {useState} from 'react';
import axios from "axios";

export default function Login({getData}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')


    const userLogin = () => {
        axios
          .post("http://localhost:4000/api/kullanicilar/login", {
            kullaniciAd: username,
            parola: password,
            email: email,
          })
          .then(function (response) {
            localStorage.setItem('Token', response.data.token)
          })
          .then(function (){
            getData()
          })
      }

  return (
    <>
        <input type='text' id='username' onChange={(e) => setUsername(e.target.value)}/>
        <input type='password' id='password' onChange={(e) => setPassword(e.target.value)}/>
        <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => userLogin()}>Login</button>
    </>
  )
}
