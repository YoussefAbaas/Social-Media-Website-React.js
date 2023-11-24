import React, { useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  });
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profilerightTop">
            <div className="profileCover">
              <img
                src="/assets/post/3.jpeg"
                className="profilecoverImage"
                alt=""
              />
              <img src={user?.photoURL} className="profileuserImage" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileinfoName">{user?.displayName}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed profile />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
