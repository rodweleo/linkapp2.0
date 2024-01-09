import { MainNavigation } from "../../ui/components/navigation/main_nav";
import { Routes, Route } from "react-router-dom";
import { Chats } from "../chats/chats";
import { Contacts } from "../contacts/contacts";
import { Home } from "../home/home";
import { Search } from "../search/search";
import { Notifications } from "../notifications/notifications";

export const LinkApp = () => {
  return (
    <main className="h-screen w-full flex overflow-hidden">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="chats/*" element={<Chats />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
      </Routes>
    </main>
  );
};
