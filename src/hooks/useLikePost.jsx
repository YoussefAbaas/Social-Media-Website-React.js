import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const likePost = async (id, isLiked) => {
  const response = await axios.get(
    `https://social-app-af451-default-rtdb.firebaseio.com/posts/${id}.json`
  );

  // Calculate the new 'likes' count
  const currentLikes = response.data.like || 0;
  const newLikes = isLiked ? currentLikes + 1 : currentLikes - 1;

  // Update the post with the new 'likes' count
  return axios.patch(
    `https://social-app-af451-default-rtdb.firebaseio.com/posts/${id}.json`,
    { like: newLikes }
  );
};

export default function useLikePost(id, isLiked) {
  const queryclient = useQueryClient();
  const query = useMutation(() => likePost(id, isLiked), {
    onSuccess: () => {
      queryclient.invalidateQueries("posts");
    },
    onError: () => {},
  });
  return query;
}
