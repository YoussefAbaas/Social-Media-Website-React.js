import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useMutation } from "@tanstack/react-query";
import { store } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const handleLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // User is authenticated, you can handle the authentication result here.
      const user = userCredential.user;
      console.log("User Login:", user);
      return user?.toJSON();
    }
  );
};

export default function useFirebaseLogin(email, password) {
  const navigate = useNavigate();
  const query = useMutation(() => handleLogin(email, password), {
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
