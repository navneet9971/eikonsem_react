import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Check from "./pages/Check";
import Download from "./pages/Download";
import Myaccount from "./pages/Myaccount";
import Review from "./pages/Review";
import Start from "./pages/Start";
import View from "./pages/View";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "START NEW APPLICATION",
    },
    {
      path: "/dashboard/review",
      name: "REVIEW APPLICATION",
    },
    {
      path: "/dashboard/myaccount",
      name: "MY ACCOUNT",
    },
    {
      path: "/dashboard/check",
      name: "CHECK GST OF COMPLIANCE",
    },

    {
      path: "/dashboard/add",
      name: "ADD USERS",
    },
    {
      path: "/dashboard/download",
      name: "DOWNLOAD FORM",
    },
    {
      path: "/dashboard/view",
      name: "VIEW REPORTS",
    },
  ];
  return (
    <div className="container" style={{background:'#fff'}}>
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Hello,
          </h1>
          <div
            style={{ marginLeft: isOpen ? "-95px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/add" element={<Add />} />
        <Route path="/review" element={<Review />} />
        <Route path="/check" element={<Check />} />
        <Route path="/download" element={<Download />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
