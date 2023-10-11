import React, { useState } from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";
import { DataProps } from "../App";

interface EditProps {
    postData: DataProps;
    update: () => Promise<void>;
    setActive: (data: DataProps) => void;
}

const Edit: React.FC<EditProps> = ({ postData, update, setActive }) => {
  const requests = new Requests();
  const [inputValue, setValue] = useState(postData?.content || '');

  const changeValue = (value: string) => {
    setValue(value);
  };

  return (
    <div className="edit-post">
      <div className="edit-top">
        <div>Edit post</div>
        <Link to={'/'}>
        <button><img className="svg" src="../../assets/svg/free-icon-close-4947222.png"/></button>
        </Link>
      </div>
      <div className="post-data">
        <img className="photo" src="../../assets/svg/ec5x_5eNya8-01.jpeg" />
        <input value={inputValue} onChange={(e) => changeValue(e.target.value)} />
        <img className="svg input-smile" src="../../assets/svg/smile-1-svgrepo-com.svg" />
      </div>
      <ul className="edit-actions">
        <li>
          <img className="svg" src="../../assets/svg/camera-svgrepo-com.svg" />
          <div>Photo/Video</div>
        </li>
        <li>
          <img className="svg" src="../../assets/svg/smile-1-svgrepo-com.svg" />
          <div>Feelings/Emotions</div>
        </li>
        <li>
          <img className="svg" src="../../assets/svg/gif-svgrepo-com.svg" />
          <div>GIF</div>
        </li>
        <li>
          <img className="svg" src="../../assets/svg/person-remove-svgrepo-com.svg" />
          <div>Tag friends</div>
        </li>
        <li>
          <img className="svg" src="../../assets/svg/location-pin-svgrepo-com.svg" />
          <div>Location</div>
        </li>
      </ul>
      <div className="edit-bottom">
        <Link to={`/posts/${postData.id}`}>
          <button className="blue-btn"
            onClick={async () => {
              await requests.put({
                id: postData.id,
                content: inputValue,
              });
              setValue(""); 
              update();
              setActive({id: postData.id, content: inputValue, created: postData.created })
          }}>
            Save
          </button>
        </Link>
      </div>
    </div>
  )
};

export default Edit;
