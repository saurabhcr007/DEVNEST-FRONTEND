import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
export default function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <AddTodo />
      <Todos />
    </div>
  );
}
