import React, { useState } from "react";
import "./register.css";
import useFirebaseRegister from "../../hooks/useFirebaseRegister";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const navigate = useNavigate();
  const { mutate } = useFirebaseRegister(name, email, password);
  const handleSubmit = () => {
    if (!name) {
      alert("not valid name");
      return;
    }
    if (!email) {
      alert("not valid email");
      return;
    }
    if (!password) {
      alert("not valid password");
      return;
    }
    if (password !== repeatedPassword) {
      alert("not the same passwords");
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
              placeholder="User Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="loginInput"
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
              onChange={(e) => {
                setRepeatedPassword(e.target.value);
              }}
            />
            <button className="loginButton" onClick={handleSubmit}>
              Sign Up
            </button>

            <button
              className="registerButton"
              onClick={() => navigate("/login")}
            >
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
