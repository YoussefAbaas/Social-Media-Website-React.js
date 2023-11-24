import React, { useState } from "react";
import "./sidebar.css";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import Users from "../../fakers/users.json";

export default function Sidebar() {
  const [users, setUsers] = useState(Users);
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebaritem">
            <RssFeed className="sidebarlistitemicon" />
            <span className="sidebaritemText">Feed</span>
          </li>
          <li className="sidebaritem">
            <Chat className="sidebarlistitemicon" />
            <span className="sidebaritemText">Chats</span>
          </li>
          <li className="sidebaritem">
            <PlayCircleFilledOutlined className="sidebarlistitemicon" />
            <span className="sidebaritemText">Videos</span>
          </li>
          <li className="sidebaritem">
            <Group className="sidebarlistitemicon" />
            <span className="sidebaritemText">Groups</span>
          </li>
          <li className="sidebaritem">
            <Bookmark className="sidebarlistitemicon" />
            <span className="sidebaritemText">Bookmarks</span>
          </li>
          <li className="sidebaritem">
            <HelpOutline className="sidebarlistitemicon" />
            <span className="sidebaritemText">Questions</span>
          </li>
          <li className="sidebaritem">
            <WorkOutline className="sidebarlistitemicon" />
            <span className="sidebaritemText">Jobs</span>
          </li>
          <li className="sidebaritem">
            <Event className="sidebarlistitemicon" />
            <span className="sidebaritemText">Events</span>
          </li>
          <li className="sidebaritem">
            <School className="sidebarlistitemicon" />
            <span className="sidebaritemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {users?.map((user) => (
            <li className="sidebarfriend">
              <img
                className="sidebarfriendImg"
                src={user?.profilePicture}
                alt=""
              />
              <span className="sidebarfriendName">{user?.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
