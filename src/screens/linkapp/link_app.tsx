import { MainNavigation } from "../../ui/components/navigation/main_nav";
import { Routes, Route, redirect } from "react-router-dom";
import { Chats } from "../chats/chats";
import { Contacts } from "../contacts/contacts";
import { Home } from "../home/home";
import { Search } from "../search/search";
import { Notifications } from "../notifications/notifications";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { Settings } from "../settings/settings";
import { UserContext } from "../../hooks/contexts/user_context";
import { getCookie } from "../../functions/getCookie";

export const LinkApp = () => {
  const { user }: any = useAuth();

  useEffect(() => {
    const access_token = getCookie();
    if (access_token === null) {
      redirect("/login");
    }
  }, []);
  return (
    <main className="w-full flex h-screen fixed">
      <UserContext.Provider value={user}>
        <MainNavigation />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="chats/*" element={<Chats />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="notifications" element={<Notifications />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Routes>
      </UserContext.Provider>
    </main>
  );
};
