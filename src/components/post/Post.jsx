import React, { useEffect, useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import Users from "../../fakers/users.json";
import useLikePost from "../../hooks/useLikePost";
import { formatDistanceToNow } from "date-fns";

export default function Post({
  id,
  desc,
  photo,
  date,
  userId,
  like,
  comment,
  userName,
  userPhoto,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesNum, setLikesNum] = useState(like);

  const { mutate } = useLikePost(id, isLiked);

  const getUserData = (userId) => {
    return Users.filter((user) => {
      return user?.id === userId;
    })[0];
  };
  const pressLikeHandler = () => {
    setIsLiked((state) => !state);
    mutate();
  };

  useEffect(() => {
    setLikesNum(like);
  }, [like]);

  const formatTimeAgo = (timestamp) => {
    const postTime = new Date(timestamp);
    return formatDistanceToNow(postTime, { addSuffix: true });
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="posttopLeft">
            <img
              src={getUserData(userId)?.profilePicture ?? userPhoto}
              alt=""
              className="postprofileImg"
            />
            <span className="postuserName">
              {getUserData(userId)?.username ?? userName}
            </span>
            <span className="postDate">{formatTimeAgo(date)}</span>
          </div>
          <div className="posttopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postbottomLeft">
            <img
              onClick={pressLikeHandler}
              className="likeIcon"
              src="assets/like.png"
              alt=""
            />
            <img
              onClick={pressLikeHandler}
              className="likeIcon"
              src="assets/heart.png"
              alt=""
            />
            <span className="likeCounter">{likesNum} people liked it</span>
          </div>
          <div className="postbottomRight">
            <span className="postcommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
