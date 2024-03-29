import { useContext } from "react";
import { UserContext } from "../../../hooks/contexts/user_context";

interface MessageTypes {
  message: any;
  key: number;
}
export const ChatBubble = ({ message, key }: MessageTypes) => {
  const userContext = useContext<any>(UserContext);

  return (
    <div
      className={`${
        message.sender === userContext.email
          ? "outgoing-message "
          : "incoming-message "
      }`}
      key={key}>
      <div className="bg-white p-2.5 shadow-xl font-medium">
        <p>{message.body}</p>
        <div className="flex justify-end">
          {message.isDelivered ? (
            <i
              className={`fa-solid fa-check-double ${
                message.isRead ? "text-blue-500" : "text-slate-400"
              } scale-75`}></i>
          ) : (
            <i className="fa-regular fa-clock text-slate-400 scale-75"></i>
          )}
        </div>
      </div>
    </div>
  );
};
