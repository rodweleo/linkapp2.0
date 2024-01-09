import { useContext, useEffect, useState } from "react";
import { MessagesApi } from "../../controllers/message_controller";

import { UserController } from "../../controllers/user_controller";
import { ChatContext } from "../../hooks/contexts/chat_context";
import { ChatMessages } from "./chat_messages";

export const ChatBox = () => {
  const chatContext = useContext(ChatContext);
  const [partyB, setPartyB] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    try {
      new UserController()
        .fetchUserDetails(chatContext.senderId)
        .then((response) => {
          setPartyB(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, [chatContext]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (message === "") {
      return;
    }
    const _messageApi = new MessagesApi();
    _messageApi.sendMessage(chatContext.uId, receiverId, message);
  }
  return (
    <section className="h-full w-full bg-slate-200 rounded-md relative flex flex-col items-center">
      <section className="w-full">
        <h2 className="font-bold text-xl">{partyB?.name}</h2>
        <ChatMessages />
      </section>
      <form
        className="px-2 flex gap-2.5 items-center justify-between border border-slate-300 w-full bg-white absolute bottom-0"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="flex gap-2.5 items-center w-full">
          <i className="fa-solid fa-camera"></i>
          <input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Type a message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <button
          type="submit"
          disabled={message === ""}
          className={`${message === "" ? "disabled" : ""}`}>
          <i className="fa-solid fa-paper-plane  p-2.5 cursor-pointer"></i>
        </button>
      </form>
    </section>
  );
};
