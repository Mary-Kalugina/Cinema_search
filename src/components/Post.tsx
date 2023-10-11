import React from "react";

interface DataProps {
    id: number,
    content: string,
    created: number
}

const Post: React.FC<DataProps> = (data) => {

    function formatDate(timestamp: number) {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().slice(-2);
        return `${day}.${month}.${year}`;
    }

    return (
        <div className="post-body">
            <div className="post-top">
                <img className="photo-big" src="../../assets/svg/ec5x_5eNya8-01.jpeg" />
                <div className="user-info">
                    <div className="post-name"></div>
                    <div className="info"></div>
                    <div className="time">{formatDate(data.created)}</div>
                </div>
            </div>
            <div className="post-text">{data.content}</div>
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
        </div>
    );
}

export default Post;
