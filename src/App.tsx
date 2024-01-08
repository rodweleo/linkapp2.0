import { useEffect, useState } from "react";
import "./App.css";
import { LoginScreen } from "./screens/login_screen/login_screen";
import { getCookie } from "./functions/getCookie";
import { LinkApp } from "./screens/linkapp/link_app";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = getCookie("linkapp_access_token");

    if (accessToken !== null) {
      setLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return <LinkApp />;
  } else {
    return <LoginScreen />;
  }
}

export default App;
