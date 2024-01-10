import { useContext, useEffect, useState } from "react";
import { MessagesApi } from "../../controllers/message_controller";

import { UserController } from "../../controllers/user_controller";
import { ChatContext } from "../../hooks/contexts/chat_context";
import { ChatMessages } from "./chat_messages";
import { UserContext } from "../../hooks/contexts/user_context";
import { Message } from "../../models/Message";
import { Timestamp } from "firebase/firestore";

export const ChatBox = () => {
  const chatContext = useContext(ChatContext);
  const userContext = useContext(UserContext);
  const [partyB, setPartyB] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      new UserController()
        .fetchUserDetails(
          chatContext.participants.filter(
            (participant: string) => participant !== userContext.email
          )[0]
        )
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (message === "") {
      return;
    }

    const newMessage = new Message({
      sender: userContext.email,
      body: message,
      receiver: partyB.email, // Replace with the actual receiver's email
      createdAt: Timestamp.now(),
      chatId: chatContext.id, // Replace with the actual chat ID
      isDelivered: false,
      isRead: false,
    });

    const response = await new MessagesApi().sendMessage(newMessage);
    if (response === "") {
      return;
    }

    setMessage("");
  }
  return (
    <section className="h-screen w-full bg-slate-200 rounded-md flex flex-col items-center justify-between gap-1">
      <section className="w-full px-2.5 overflow-y-scroll h-screen mb-2">
        <h2 className="font-bold text-xl">{partyB?.name}</h2>
        <ChatMessages />
      </section>
      <form
        className="px-2 flex gap-2.5 items-center justify-between border border-slate-300 w-full bg-white sticky bottom-0"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="flex gap-2.5 items-center ">
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
