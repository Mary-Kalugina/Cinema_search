import React from "react";
import Input from "./Input";
import Post from "./Post";
import { Link } from "react-router-dom";
import { usePostContext } from "./PostContext";


interface PostsProps {
  posts: { id: number; content: string; created: number }[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { setPostState } = usePostContext();
  const changeActivePost = (post: { id: number; content: string; created: number }) => {
    setPostState(post)
  }

  return (
    <div className="posts">
      <Link to={'/posts/new'}><button>Создать пост</button></Link>
      {posts.map((post) => (
        <div key={post.id} className="post" onClick={() => changeActivePost(post)}>
          <Link to={`/posts/${post.id}`}>
            <Post id={post.id} content={post.content} created={post.created} />
          </Link>
          <Input />
        </div>
      ))}
    </div>
  );
};

export default Posts;
