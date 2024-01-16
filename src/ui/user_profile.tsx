import { Avatar } from "./components/avatar";
import { ChatActions } from "./components/chats/chat_actions";
import { ChatMedia } from "./components/chats/chat_media";
import { ChatSettings } from "./components/chats/chat_settings";

export const UserProfile = ({ user, onCloseUserProfile }) => {
  function closeUserProfile() {
    onCloseUserProfile(false);
  }

  return (
    <section className="w-full relative p-2.5 h-screen ">
      <i
        className="fa-solid fa-x absolute right-2.5 text-red-500 cursor-pointer"
        onClick={() => closeUserProfile()}></i>
      <section className="flex flex-col gap-2.5 justify-between h-full pb-2.5">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-28">
              <Avatar url={user?.photoURL} />
            </div>
            <h1 className="font-bold text-2xl">{user?.name}</h1>
            <p className="text-slate-500">{user?.bio}</p>
          </div>
          <ChatMedia />
          <ChatSettings />
        </div>
        <ChatActions user={user} />
      </section>
    </section>
  );
};
