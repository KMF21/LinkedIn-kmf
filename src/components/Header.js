import React from "react";
import "../styles/Header.css";
import { HiSearch, HiHome } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications, IoIosPeople, IoIosMedkit } from "react-icons/io";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
const dispatch = useDispatch();


const logoutOfApp = ()=>{
  dispatch(logout())
  auth.signOut();
}

  return (
    <div className="header">
      {/* left */}
      <div className="header__left">
        <img
          className="img_link"
          src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png"
          alt="linkedin logo"
        />
        <div className="header__search">
          <HiSearch />
          <input type="text"  placeholder="Search"/>
        </div>
      </div>

      {/* right */}
      <div className="header__right">
        <HeaderOption Icon={HiHome} title="Home" />
        <HeaderOption Icon={IoIosPeople} title="My Network" />
        <HeaderOption Icon={IoIosMedkit} title="Jobs" />
        <HeaderOption Icon={TbMessageCircle} title="Messaging" />
        <HeaderOption Icon={IoMdNotifications} title="Notification" />
        <HeaderOption onClick={logoutOfApp} title="me" avatar={true}/>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Header;
