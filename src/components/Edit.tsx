import React, { useState } from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";
import { DataProps } from './PostContext';

interface EditProps {
  postData: DataProps;
}

const Edit: React.FC<EditProps> = ({ postData }) => { // Destructure the prop here
  const requests = new Requests();
  const [inputValue, setValue] = useState(postData?.content || '');

  const changeValue = (value: string) => {
    setValue(value);
  };

  return postData ? (
    <div className="edit-post">
      <div className="edit-top">
        <div>Редактировать публикацию</div>
        <button>close</button>
      </div>
      <div className="post-data">
        <img />
        <input value={inputValue} onChange={(e) => changeValue(e.target.value)} />
        <img />
      </div>
      <ul className="edit-actions">
        <li>
          <img />
          <div></div>
        </li>
        <li>
          <img />
          <div></div>
        </li>
        <li>
          <img />
          <div></div>
        </li>
        <li>
          <img />
          <div></div>
        </li>
        <li>
          <img />
          <div></div>
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
          Сохранить
        </button>
      </Link>
    </div>
  ) : null;
};

export default Edit;
