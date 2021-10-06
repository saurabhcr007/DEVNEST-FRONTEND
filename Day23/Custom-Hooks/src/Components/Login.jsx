import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UseAuth from "./UseAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var history = useHistory();
  const handleSubmit = () => {
    if (!email && !password) {
      alert("fields should not be blank");
    } else {
      const user = UseAuth();
      user.Login(email, password);
      setEmail("");
      setPassword("");
    }
  };
  const Redirect = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <div>
        <h1>Login</h1>
        <label>
          Email: &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            password={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => handleSubmit()}>Login</button>
        <button onClick={() => Redirect()}>Signup</button>
      </div>
    </div>
  );
}
