import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon size={70} className="headerOption__icon icons" />}
      {avatar && (
        <Avatar className="headerOption__icon avatar_img">
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
