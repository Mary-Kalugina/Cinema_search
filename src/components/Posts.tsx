import React from "react";
import Input from "./Input";
import Post from "./Post";
import { Link } from "react-router-dom";
import { DataProps } from "../App";
import Requests from "./Requests";

interface PostsProps {
  posts: DataProps[],
  postManager: (arg0: DataProps) => void;
}
const requests = new Requests();
const Posts: React.FC<PostsProps> = ({ posts, postManager }) => {

  const changeActivePost = async (id: number) => {
    const postData = await requests.getPost(id); 
    postManager({ ...postData.post });
  }

  return (
    <div className="posts">
      <div className="create-top">
        <Link to={'/posts/new'}>
          <button className="blue-btn">Create post</button>
        </Link>
      </div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <Link to={`/posts/${post.id}`} onClick={() => changeActivePost(post.id)}>
            <Post id={post.id} content={post.content} created={post.created} />
          </Link>
          <Input />
        </div>
      ))}
    </div>
  );
};

export default Posts;
