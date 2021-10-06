import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "./actions";
import "./App.css";
import { reducerType } from "./store";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {notes.length === 0 ? (
          <h2>Click on Add to add note</h2>
        ) : (
          <ul>
            {notes.map((note: string, index: number) => {
              return (
                <li key={index}>
                  <h3 style={{ display: "inline-block" }}>{note}</h3>
                  <button
                    className="delete"
                    onClick={() => dispatch(deleteNote(index))}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
