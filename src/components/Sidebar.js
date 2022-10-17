import React from "react";
import "../styles/Sidebar.css";
import { Avatar, StyledBadge } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);




  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          alt="Remy Sharp"
          src={user.photoUrl}
        >{user.email[0]}</Avatar>

        <h3>{user.displayName}</h3>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4,253</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">435</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programing")}
        {recentItem("software engineering")}
        {recentItem("software design")}
      </div>
    </div>
  );
}

export default Sidebar;
