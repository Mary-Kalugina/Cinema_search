import React, {useState} from "react";
import { Link } from "react-router-dom";
import Requests from "./Requests";

const CreatePost: React.FC = () => {
    const requests = new Requests();
    const [inputValue, setValue] = useState('');
    const changeValue = (value: string) => {
        setValue(value)
    }
    const uniqueId = Number(new Date());

  return (
   <div className="post-create">
        <div className="actions-pannel">
        <ul className="actions">
                <li>
                    <img/>
                    <div className="action">Публикация</div>
                </li>
                <li>
                    <img/>
                    <div className="action">Фото</div>
                </li>
                <li>
                    <img/>
                    <div className="action">Прямой эфир</div>
                </li>
                <li>
                    <img/>
                    <div className="action">Ещё</div>
                </li>
            </ul>
            <Link to={'/'}><button className="close">закрыть</button></Link> 
        </div>
        <div className="input-area">
            <input value={inputValue} onChange={(e) => changeValue(e.target.value)}/>
            <img/>
        </div> 
        <Link to='/'><button onClick={() => requests.post({id: uniqueId, content: inputValue, created: Number(new Date())})}>Опубликовать</button></Link>
   </div>
  );
}

export default CreatePost;
