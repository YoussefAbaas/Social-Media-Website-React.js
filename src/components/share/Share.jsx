/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import useAddPost from "../../hooks/useAddPost";
import { useSelector } from "react-redux";

export default function Share() {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const fileInputRef = useRef(null);
  const user = useSelector((state) => state?.user);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const { mutate: addPost, isError } = useAddPost();
  const handleShare = () => {
    addPost({
      comment: 0,
      desc: postText,
      like: 0,
      photo: selectedImage,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
    });
    if (!isError) {
      setPostText("");
      setSelectedImage("");
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareprofilePicture" src={user?.photoURL} alt="" />
          <input
            type="text"
            placeholder="what is in your mind?"
            className="shareInput"
            onChange={(e) => {
              setPostText(e.currentTarget.value);
            }}
          />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleImageChange}
                style={{ display: "none" }}
                ref={fileInputRef}
                id="hiddenFileInput"
              />
              <span className="shareoptionText" onClick={handleIconClick}>
                Photo or Video
              </span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareoptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareoptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareoptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
