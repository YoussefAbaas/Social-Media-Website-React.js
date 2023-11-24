import React, { useState } from "react";
import "./login.css";
import useFirebaseLogin from "../../hooks/useFirebaseLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate } = useFirebaseLogin(email, password);
  const handleSubmit = () => {
    if (!email) {
      alert("not valid email");
      return;
    }
    if (!password) {
      alert("not valid password");
      return;
    }
    mutate();
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with your friends around the world
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              placeholder="Email"
              className="loginInput"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="loginButton" onClick={handleSubmit}>
              Login
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              className="registerButton"
              onClick={() => navigate("register")}
            >
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
