import React, { useState } from "react";
import actions from "../Actions/index";
import { useDispatch } from "react-redux";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Todos List with Redux</h3>
      <div className="box">
        <input
          type="text"
          className="form-control"
          placeholder="Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          type="button"
          className="btn btn-success"
          value="Add Todo"
          onClick={() => {
            if (todo === "") {
              alert("todo should not be empty");
            } else {
              dispatch({ type: actions.addTodo, payload: todo });
            }
          }}
        />
      </div>
    </div>
  );
}
