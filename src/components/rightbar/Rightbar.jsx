import React, { useState } from "react";
import "./rightbar.css";
import Users from "../../fakers/users.json";

export default function Rightbar({ profile }) {
  const [users, setUsers] = useState(Users);

  const HomeRightBar = () => (
    <>
      <div className="birthdayContainer">
        <img src="assets/gift.png" className="birthdayImg" alt="" />
        <span className="birthdayText">
          <b>Mohamed Ahmed</b> and other <b>4 friends</b> have a birthday today.
        </span>
      </div>
      <img src="/assets/ad.png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="onlinefriendsList">
        {users
          ?.filter((user) => user?.isOnline)
          ?.map((user) => (
            <li className="onlinefrienditem">
              <div className="rightbarimageContainer">
                <img
                  src={user?.profilePicture}
                  alt=""
                  className="rightbarprofileImage"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarfriendName">{user?.username}</span>
            </li>
          ))}
      </ul>
    </>
  );

  const ProfileRightBar = () => (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">City:</span>
          <span className="rightbarinfoKey">Cairo</span>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">From:</span>
          <span className="rightbarinfoKey">Cairo</span>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarinfoKey">Relationship:</span>
          <span className="rightbarinfoKey">Single</span>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFriends">
          {users.map((user, index) => (
            <div className="rightbarFriend">
              <img
                src={user?.profilePicture}
                alt=""
                className="rightbarfriendImg"
              />
              <span className="rightbarfriendName">{user?.username}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
