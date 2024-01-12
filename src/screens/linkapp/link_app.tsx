import { MainNavigation } from "../../ui/components/navigation/main_nav";
import { Routes, Route } from "react-router-dom";
import { Chats } from "../chats/chats";
import { Contacts } from "../contacts/contacts";
import { Home } from "../home/home";
import { Search } from "../search/search";
import { Notifications } from "../notifications/notifications";
import { Settings } from "../settings/settings";
import { UserContext } from "../../hooks/contexts/user_context";
import { useAuth } from "../../hooks/useAuth";
import { Calls } from "../calls/calls";

export const LinkApp = () => {
  const { user }: any = useAuth();

  return (
    <UserContext.Provider value={user}>
      <main className="w-full flex h-screen fixed">
        <MainNavigation />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="calls" element={<Calls />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="chats/*" element={<Chats />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="notifications" element={<Notifications />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Routes>
      </main>
    </UserContext.Provider>
  );
};
