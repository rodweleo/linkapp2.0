import "./App.css";
import { LoginScreen } from "./screens/login_screen/login_screen";
import { LinkApp } from "./screens/linkapp/link_app";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getCookie } from "./functions/getCookie";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = getCookie();
    if (access_token === null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/*" element={<LinkApp />}></Route>
      </Routes>
    </>
  );
}

export default App;
