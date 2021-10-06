import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UseAuth from "./UseAuth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var history = useHistory();

  const handleSubmit = () => {
    if (!email && !password) {
      alert("fields should not be blank");
    } else {
      const user = UseAuth();
      user.Signup(email, password);
      setEmail("");
      setPassword("");
      history.push("/login");
    }
  };
  return (
    <div className="container">
      <div>
        <h1>Signup</h1>
        <label>
          Name: &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" />
        </label>
        <br />
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
        <button onClick={() => handleSubmit()}>Create Account</button>
      </div>
    </div>
  );
}
