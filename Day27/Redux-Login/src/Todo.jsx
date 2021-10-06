import { useContext } from "react";
import ACTIONS, { NameContext } from "./App";

export default function Todo({ todo, dispatch }) {
  const Context = useContext(NameContext);
  return (
    <>
      <br />
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}{" "}
      </span>
      <input
        type="checkbox"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        delete
      </button>
      {Context.name}
    </>
  );
}
