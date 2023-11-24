import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const addPost = async (post) => {
  const storageRef = ref(storage, "/photos/" + Date.now()); // Use a timestamp for a more predictable path
  const metadata = {
    contentType: "image/jpeg",
  };

  const img = await fetch(post.photo);
  const bytes = await img.blob();

  await uploadBytes(storageRef, bytes, metadata);
  const url = await getDownloadURL(storageRef);
  console.log("Image URL:", url);
  return axios
    .post("https://social-app-af451-default-rtdb.firebaseio.com/posts.json/", {
      ...post,
      photo: String(url),
      date: new Date().toISOString(),
    })
    .then((data) => data.data);
};

export default function useAddPost() {
  const queryclient = useQueryClient();
  const query = useMutation(addPost, {
    onSuccess: () => {
      queryclient.invalidateQueries("posts");
    },
    onError: () => {},
  });
  return query;
}
