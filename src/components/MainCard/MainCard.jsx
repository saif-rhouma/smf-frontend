import React from "react";
import "./MainCard.css";

const MainCard = (props) => {
  return (
    <div className="MainCard">
      <div className="card-title">{props.title}</div>
      <div className="card-content">
        {props.data}
        {props.children}
      </div>
    </div>
  );
};

export default MainCard;
