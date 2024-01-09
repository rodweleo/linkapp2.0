import { Routes, Route } from "react-router-dom";
import { ChatContext } from "../../../hooks/contexts/chat_context";
import { useChats } from "../../../hooks/useChats";
import { ChatBox } from "../../../screens/chats/chat_box";
import { ChatListItem } from "./chat_list_item";
import { useState } from "react";

export const ChatList = () => {
  const [openedChat, setOpenedChat] = useState("");
  const chats = useChats();

  return (
    <section className="flex w-full gap-1">
      <section className="bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-slate-200 w-auto p-1 rounded-md h-8">
            <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
            <input
              type="text"
              className="px-2 outline-none border-none bg-transparent"
            />
          </div>
          <button>
            <i className="fa-solid fa-add bg-slate-200 text-slate-400 p-2 rounded-md"></i>
          </button>
        </div>
        <ul className="mt-1">
          {chats.map((chat) => (
            <ChatListItem chat={chat} updateOpenedChat={setOpenedChat} />
          ))}
        </ul>
      </section>
      <ChatContext.Provider value={openedChat}>
        <ChatBox />
      </ChatContext.Provider>
    </section>
  );
};
