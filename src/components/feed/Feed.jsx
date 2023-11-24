import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useSelector } from "react-redux";

export default function Feed({ profile }) {
  const { data: posts } = useFetchPosts();
  const user = useSelector((state) => state?.user);
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {!posts ? (
          <></>
        ) : profile ? (
          Object.keys(posts)
            ?.reverse()
            ?.map((key) => {
              return (
                posts[key].userName === user?.displayName && (
                  <Post {...posts[key]} id={key} />
                )
              );
            })
        ) : (
          Object.keys(posts)
            ?.reverse()
            ?.map((key) => {
              return <Post {...posts[key]} id={key} />;
            })
        )}
      </div>
    </div>
  );
}
