import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { postType } from "../App";
import Post from "./Post";

export default function Landing({ posts }: { posts: postType[] }) {
  const user = useSelector((state: any) => state.user);
  const story = useRef<any>();
  useEffect(() => {
    story.current.scrollBy({
      top: 0,
      left: 1000,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-8">
          <div className="card story" ref={story}>
            {[...Array(15)].map((_, e) => (
              <div className="story-img">
                <img src={user.profilePicture} alt="" />
              </div>
            ))}
          </div>
          <div className="posts">
            {posts.length > 0
              ? posts.map((post, index) => {
                  return <Post post={post} key={index} />;
                })
              : null}
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}
