import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../Actions";
export default function Todos() {
  const Todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {Todos.length === 0 ? (
        <h3>No Todos</h3>
      ) : (
        Todos.map((todo, index) => {
          return (
            <div key={index} className="box">
              <h5
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.title}
              </h5>
              <input
                type="checkbox"
                className="check"
                onClick={() =>
                  dispatch({ type: actions.toggle, payload: todo.id })
                }
              />
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({ type: actions.removeTodo, payload: todo.id })
                }
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
