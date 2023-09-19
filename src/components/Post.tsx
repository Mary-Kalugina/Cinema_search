import React from "react";

interface DataProps {
    id: number,
    content: string,
    created: number
}

const Post: React.FC<DataProps> = (postData) => {

    function formatDate(timestamp: number) {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${day}.${month}.${year}`;
    }

  return (
   <div className="post-body">
        <div className="post-top">
            <img/>
            <div className="user-info">
                <div className="post-name"></div>
                <div className="info"></div>
                <div className="time">{formatDate(postData.created)}</div>
            </div>
        </div>
        <div className="post-text">{postData.content}</div>
        <div className="post-btns">
            <button className="like post-btn"></button>
            <button className="comment post-btn"></button>
        </div>
   </div>
  );
}

export default Post;
