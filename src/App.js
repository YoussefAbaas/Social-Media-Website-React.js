import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFirebaseRegister, {
  handleRegister,
} from "./hooks/useFirebaseRegister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSelector } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  const user = useSelector((state) => state?.user);
  console.log("user is", user);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
