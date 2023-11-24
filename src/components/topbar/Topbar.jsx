import React from "react";
import "./topbar.css";
import {
  Chat,
  LogoutTwoTone,
  Notifications,
  Person,
  Search,
} from "@mui/icons-material";
import { clearUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Topbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  return (
    <div className="TopbarContainer">
      <div className="topbarLeft">
        <span
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          Social App
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchicon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarlinks">
          <span
            className="topBarlink"
            onClick={() => {
              navigate("/");
            }}
          >
            Homepage
          </span>
          <span
            className="topBarlink"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Timeline
          </span>
        </div>
        <div className="tobBarIcons">
          <div className="topbariconitem">
            <Person />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Chat />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Notifications />
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <div className="topbarprofileContainer">
          <img src={user?.photoURL} alt="" className="profileimg" />
          <LogoutTwoTone
            className="logoutButton"
            onClick={() => dispatch(clearUser())}
          />
        </div>
      </div>
    </div>
  );
}
