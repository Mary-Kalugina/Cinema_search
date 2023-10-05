import React, { useState } from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";

interface CreatePostProps {
  addPosts: (posts: DataProps[]) => void;
}

interface DataProps {
  id: number;
  content: string;
  created: number;
}

const CreatePost: React.FC<CreatePostProps> = ({ addPosts }) => {
  const requests = new Requests();
  const [inputValue, setInputValue] = useState("");
  const changeValue = (value: string) => {
    setInputValue(value);
  };

  const sendRequests = async () => {
    const newPost: DataProps = {
      id: 0,
      content: inputValue,
      created: Number(new Date()),
    };
    
    await requests.post(newPost);
  
    const response = await requests.get();
    
    if (Array.isArray(response)) {
      addPosts(response);
      setInputValue(""); 
    } else {
      console.error("Unexpected response format:", response);
    }
  };
  

  return (
    <div className="post-create">
      <div className="actions-pannel">
        <ul className="actions">
          <li>
            <img className='svg' src='../../assets/svg/pen-svgrepo-com.svg' alt="Action 1" />
            <div className="action">Публикация</div>
          </li>
          <li>
            <img className='svg' src="../assets/svg/camera-svgrepo-com.svg" alt="Action 2" />
            <div className="action">Фото</div>
          </li>
          <li>
            <img className='svg' src="../assets/svg/video-svgrepo-com.svg" alt="Action 3" />
            <div className="action">Прямой эфир</div>
          </li>
          <li>
            <img className='svg' src="../assets/svg/more-horizontal-svgrepo-com.svg" alt="Action 4" />
            <div className="action">Ещё</div>
          </li>
        </ul>
        <Link to="/">
          <button className="close"><img className='svg' src="../assets/svg/free-icon-close-4947222.png" alt="close" /></button>
        </Link>
      </div>
      <div className="input-area">
        <input value={inputValue} onChange={(e) => changeValue(e.target.value)} />
        <img className='svg input-smile' src="../assets/svg/smile-1-svgrepo-com.svg" alt="smiles" />
      </div>
      <Link to="/"><button onClick={() => sendRequests()}>Опубликовать</button></Link>
    </div>
  );
};

export default CreatePost;
