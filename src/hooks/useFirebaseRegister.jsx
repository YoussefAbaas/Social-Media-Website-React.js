import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useMutation } from "@tanstack/react-query";
import { store } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const handleRegister = async (username, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // User is authenticated, you can handle the authentication result here.
      const user = userCredential.user;
      const photoUrl = `/assets/person/${randomIntFromInterval(1, 10)}.jpeg`;
      updateProfile(user, {
        displayName: username,
        photoURL: photoUrl,
      });
      console.log("User Registerd:", user);
      return { ...user?.toJSON(), displayName: username, photoURL: photoUrl };
    }
  );
};

export default function useFirebaseRegister(username, email, password) {
  const navigate = useNavigate();
  const query = useMutation(() => handleRegister(username, email, password), {
    onSuccess: (data) => {
      store.dispatch(setUser(data));
      navigate("/");
    },
    onError: (error) => {
      alert(error);
    },
  });
  return query;
}
