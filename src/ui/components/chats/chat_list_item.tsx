import { useContext, useEffect, useState } from "react";
import { Avatar } from "../avatar";
import { UserController } from "../../../controllers/user_controller";
import { ChatListItemSkeleton } from "./chat_list_skeleton";
import { formatDate } from "../../../functions/formatDate";
import { UserContext } from "../../../hooks/contexts/user_context";

interface ChatType {
  chat: any;
  updateOpenedChat: any;
  key: number;
}
export const ChatListItem = ({ key, chat, updateOpenedChat }: ChatType) => {
  const userContext = useContext<any>(UserContext);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch the user
    if (chat) {
      new UserController()
        .fetchUserDetails(
          chat.participants.filter(
            (participant: string) => participant !== userContext.email
          )[0]
        )
        .then((response) => {
          setUser(response);
          setLoading(false);
        });
    }
  }, []);

  function updateChatContext() {
    updateOpenedChat(chat);
  }
  return (
    <>
      {loading ? (
        <ChatListItemSkeleton />
      ) : (
        <div
          className="flex h-fit gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md w-full"
          key={key}
          onClick={() => updateChatContext()}>
          <div className="relative">
            <Avatar url={user?.photoURL} />
            <i
              className={`fa-solid fa-circle ${
                user.isOnline ? "text-green-500" : "text-slate-500"
              } scale-50 absolute -right-1 -bottom-2 border-4 border-white rounded-full`}></i>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">{user?.name}</h2>
              <span className="text-slate-400">
                {formatDate(chat.updatedAt)}
              </span>
            </div>
            <p className="text-slate-400">{chat.lastMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};
