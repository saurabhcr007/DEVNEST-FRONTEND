import React from "react";
import actions from "../Actions/index";
import { useDispatch } from "react-redux";

export default function Input() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Input</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        onChange={(e) => {
          dispatch({
            type: actions.username,
            payload: { username: e.target.value },
          });
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        onChange={(e) => {
          dispatch({
            type: actions.email,
            payload: { email: e.target.value },
          });
        }}
      />
    </div>
  );
}
