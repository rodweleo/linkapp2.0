import "./App.css";
import { LoginScreen } from "./screens/login_screen/login_screen";
import { LinkApp } from "./screens/linkapp/link_app";
import { UserContext } from "./hooks/contexts/user_context";
import { useAuth } from "./hooks/useAuth";
import { useEffect, useState } from "react";

function App() {
  const { user } = useAuth();
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [isAuthenticated]);
  if (isAuthenticated) {
    return (
      <UserContext.Provider value={user}>
        <LinkApp />
      </UserContext.Provider>
    );
  } else {
    return <LoginScreen />;
  }
}

export default App;
