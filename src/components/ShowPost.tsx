import React from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";
import { DataProps } from './PostContext';
import { usePostContext } from './PostContext';

interface ShowPostProps {
  postData: DataProps;
}

const ShowPost: React.FC<ShowPostProps> = ({ postData }) => { 
    const { setPostState } = usePostContext();
    const changeActivePost = (post: DataProps) => {
      setPostState(post);
    }
    const requests = new Requests();

  return (postData ? (
    <>
      <div className="post-body">
        <div className="post-top">
            <img className="svg" src="" />
            <div className="user-info">
                <div className="post-name"></div>
                <div className="info"></div>
                <div className="time">{postData.created}</div>
            </div>
        </div>
        <div className="post-text">{postData.content}</div>
        <div className="post-btns">
            <button className="like"></button>
            <button className="comment"></button>
        </div>
      </div>
      <div>
        <Link to={`/posts/${postData.id}/edit`}>
          <button onClick={() => changeActivePost(postData)}>Изменить</button>
        </Link>
        <Link to='/'>
          <button onClick={() => requests.delete(postData.id)}>Delete</button>
        </Link>
      </div>
    </>
  ) : null);
}

export default ShowPost;
