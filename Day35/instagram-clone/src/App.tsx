import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import updateUser, { User } from "./actions";
import { useEffect, useState } from "react";
import Landing from "./components/Landing";

export interface postType {
  username: string;
  post: string;
}

function App() {
  const user = useSelector((state: any) => state.user);
  const [posts, Setposts] = useState<postType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
    fetch("data/post.json")
      .then((res) => res.json())
      .then((data) => {
        Setposts(data);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
}

export default App;
