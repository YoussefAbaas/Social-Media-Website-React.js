import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPosts = async () => {
  return axios
    .get("https://social-app-af451-default-rtdb.firebaseio.com/posts.json/")
    .then((data) => data.data);
};

export default function useFetchPosts() {
  const query = useQuery(["posts", getPosts], {
    queryFn: getPosts,
    onSuccess: () => {},
    onError: () => {},
  });
  return query;
}
