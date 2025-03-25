import { useState } from "react";
import "./AuthForm.css";
import {Link } from "react-router-dom";
import axios from 'axios'

function AuthForm (){
  const [isLogin, setIsLogin] = useState(false);
  const[name, setName] = useState()
  const [email,setEmail] = usedstate()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('',{name, email, password})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }

  return (
    <div className="container">
      {isLogin ? (
        // Login Form
        <div className="form-box">
          <h2>Login</h2>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button onClick={() => alert("Logged in successfully!")}>Login</button>
          <p>Don't have an account?</p>
          <button className="toggle-btn" onClick={() => setIsLogin(false)}>Register</button>
        </div>
      ) : (
        // Register Form
        <div className="form-box">
          <h2>Register</h2>
          <input type="text" placeholder="Enter Name" 
          onChange={(e) => setName(e.target.value)}
          />

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button onClick={() => setIsLogin(true)}>Register</button>
          <p>Already have an account?</p>
          <button className="toggle-btn" onClick={() => setIsLogin(true)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
