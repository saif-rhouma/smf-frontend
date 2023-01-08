import React from "react";
import "./AppHeader.css";

import { IoIosSearch } from "react-icons/io";

const AppHeader = ({ name, img }) => {
  return (
    <div className="AppHeader">
      <div className="searchBar">
        <ul>
          <li>
            <IoIosSearch size={"20px"} />
          </li>
          <li>
            <input type="text" name="" id="" placeholder="Search ..." />
          </li>
        </ul>
      </div>
      <div className="user-connected">
        <ul>
          <li>
            <img src={img} alt="" />
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
