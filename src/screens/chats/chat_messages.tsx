import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../hooks/contexts/chat_context";
import { ChatController } from "../../controllers/chat_controller";
import { ChatBubble } from "../../ui/components/chats/chat_bubble";

export const ChatMessages = () => {
  const chatContext = useContext(ChatContext);
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    const unsubscribe = new ChatController().fetchChatMessages(
      chatContext.id,
      (messages) => {
        setMessage(messages);
      }
    );
  }, [chatContext]);

  return (
    <section className="w-full flex flex-col gap-2 h-auto">
      {messages.map((message) => (
        <ChatBubble message={message} />
      ))}
    </section>
  );
};
