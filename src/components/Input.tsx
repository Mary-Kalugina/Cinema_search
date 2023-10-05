import React from "react";

const Input: React.FC = () => {
  return (
        <div className="inputArea">
            <img className="photo" src="../../assets/svg/ec5x_5eNya8-01.jpeg" />
            <input className="input" placeholder="Comment"/>
            <div className="input-icons">
                <img className="svg" src="../../assets/svg/smile-1-svgrepo-com.svg" />
                <img className="svg" src="../../assets/svg/camera-svgrepo-com.svg" />
                <img className="svg" src="../../assets/svg/gif-svgrepo-com.svg" />
                <img className="svg" src="../../assets/svg/sticker-smile-square-svgrepo-com.svg"/>
            </div>
        </div>
  );
}

export default Input;
