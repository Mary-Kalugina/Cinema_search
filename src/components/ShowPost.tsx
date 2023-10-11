import React from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";
import { DataProps } from "../App";

interface ShowPostProps {
  postData: DataProps;
  update: () => Promise<void>;
}

const ShowPost: React.FC<ShowPostProps> = ({ postData, update }) => { 
  function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
}
    const requests = new Requests();

  return (<>
      <div className="post-show">
        <div className="post-top">
            <img className="photo" src="../../assets/svg/ec5x_5eNya8-01.jpeg" />
            <Link to={'/'}>
              <button><img className="svg" src="../../assets/svg/free-icon-close-4947222.png"/></button>
            </Link>
            <div className="user-info">
                <div className="post-name"></div>
                <div className="info"></div>
                <div className="time">{formatDate(postData.created)}</div>
            </div>
        </div>
        <div className="post-text">{postData.content}</div>
        <div className="post-btns">
            <div className="btn-wrapper">
               <button className="like post-btn" onClick={(e) => e.preventDefault()}><img className="post-btn" src="../../assets/svg/like-svgrepo-com.svg"/>
                </button>
                <div>Like</div>
            </div>
            
            <div className="btn-wrapper">
                <button className="comment post-btn" onClick={(e) => e.preventDefault()}><img className="post-btn" src="../../assets/svg/comment-3-svgrepo-com.svg"/>
                    
                </button>  
                <div>Comment</div>
            </div>
            
        </div>
      
        <div style={{ marginLeft: 'auto' }}>
        <Link to={`/posts/${postData.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to='/'>
        <button onClick={async () => {
          try {
            await requests.delete(postData.id);
            update();
          } catch (error) {
            console.error('Error deleting post:', error);
          }
        }}>
          Delete
        </button>
        </Link>
      </div>
      </div>
    </>);
}

export default ShowPost;
