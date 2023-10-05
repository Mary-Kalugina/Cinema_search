import React, { useState } from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";
import { DataProps } from './PostContext';

interface EditProps {
  postData: DataProps;
}


const Edit: React.FC<EditProps> = ({ postData }) => {
  const requests = new Requests();
  const [inputValue, setValue] = useState(postData?.content || '');

  const changeValue = (value: string) => {
    setValue(value);
  };

  return postData ? (
    <div className="edit-post">
      <div className="edit-top">
        <div>Редактировать публикацию</div>
        <button><img src="../../assets/svg/free-icon-close-4947222.png"/></button>
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
      <Link to={`/posts/${postData.id}`}>
        <button
          onClick={() =>
            requests.post({
              id: postData.id,
              content: inputValue,
              created: Number(new Date()),
            })
          }
        >
          Save
        </button>
      </Link>
    </div>
  ) : null;
};

export default Edit;
