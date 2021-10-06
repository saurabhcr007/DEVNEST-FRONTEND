import { useState } from "react";
import { postType } from "../App";

export default function Post({ post }: { post: postType }) {
  const [isLiked, SetisLiked] = useState(false);
  return (
    <div className="post card">
      <div className="card-header">
        <div className="card-title">{post.username}</div>
        <i className="bi bi-three-dots"></i>
      </div>
      <img src={post.post} className="card-img-top" alt="..." />
      <div className="buttons">
        <i
          onClick={() => SetisLiked(!isLiked)}
          className={isLiked ? "bi bi-heart-fill liked" : "bi bi-heart"}
        ></i>
        <i className="bi bi-chat"></i>
        <i className="bi bi-share"></i>
      </div>
    </div>
  );
}
