import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";

function Login() {
  return (  

    
    <div className="container">
      <form action="" className="form">
        <div style={{ position: "relative" }}>
          <h2>ElKOMP</h2>
          <p className="efficient">efficient Compliances.</p>
        </div>
        <p>Don't you have account?</p>

        <input type="submit" value="Sing up" id="singup" />
        <h3>WELCOME</h3>
        <input
          type="email"
          name="email"
          className="box"
          placeholder="Username"
          value="Username"
        />
        <input
          type="email"
          name="email"
          className="boxx"
          placeholder="Password"
          value="Password"
        />
        <input type="submit" value="LOGIN" id="submit" />
        <Link to='#'>Forget Your Password?</Link>
      </form>
    </div>
  );
}

export default Login;
