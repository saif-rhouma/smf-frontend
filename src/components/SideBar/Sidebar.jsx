import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/smf.png";
import "./Sidebar.css";

import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BiStats } from "react-icons/bi";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Dashboard");
  const menu = useRef();
  useEffect(() => {
    const menuItems = menu.current.querySelectorAll(".menuItem");
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });
    switch (active) {
      case "Dashboard":
        menu.current.querySelectorAll(".menuItem")[0].classList.add("active");
        break;
      case "Influencers":
        menu.current.querySelectorAll(".menuItem")[1].classList.add("active");
        break;
      case "Statistics":
        menu.current.querySelectorAll(".menuItem")[2].classList.add("active");
        break;
      default:
        break;
    }
  }, [active]);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu" ref={menu}>
        <div
          className="menuItem"
          onClick={() => {
            navigate("/");
            setActive("Dashboard");
          }}
        >
          <div>
            <HiOutlinePresentationChartLine />
          </div>
          <span>Dashboard</span>
        </div>

        <div
          className="menuItem "
          onClick={() => {
            navigate("/influencers");
            setActive("Influencers");
          }}
        >
          <div>
            <MdPeople />
          </div>
          <span>Influencers</span>
        </div>
        <div
          className="menuItem"
          onClick={() => {
            navigate("/statistics/-MiX1N0oKYU8GOOo_eG0");
            setActive("Statistics");
          }}
        >
          <div>
            <BiStats />
          </div>
          <span>Statistics</span>
        </div>

        <div className="menuItem " style={{ color: "#d33e34" }}>
          <div>
            <AiOutlinePoweroff />
          </div>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
