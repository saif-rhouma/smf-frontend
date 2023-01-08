import React from "react";
import "./MiniCard.css";

const MiniCard = ({ img, title, value }) => {
  return (
    <div className="MiniCard">
      <div className="mc-icon">
        <img src={img} alt="" />
      </div>
      <ul>
        <li>{title}</li>
        <li>{value}</li>
      </ul>
    </div>
  );
};

export default MiniCard;
