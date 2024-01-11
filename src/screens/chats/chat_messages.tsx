import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../hooks/contexts/chat_context";
import { ChatController } from "../../controllers/chat_controller";
import { ChatBubble } from "../../ui/components/chats/chat_bubble";

export const ChatMessages = () => {
  const chatContext = useContext<any>(ChatContext);
  const [messages, setMessage] = useState<any>([]);
  useEffect(() => {
    const unsubscribe: any = new ChatController().fetchChatMessages(
      chatContext.id,
      (messages) => {
        setMessage(messages);
      }
    );

    return () => unsubscribe();
  }, [chatContext]);

  return (
    <section className="w-full flex flex-col gap-2 h-auto">
      {messages.map((message: any) => (
        <ChatBubble message={message} />
      ))}
    </section>
  );
};
