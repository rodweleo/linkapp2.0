import { useContext, useEffect, useState } from "react";
import { Avatar } from "../avatar";
import { UserController } from "../../../controllers/user_controller";
import { ChatListItemSkeleton } from "./chat_list_skeleton";
import { formatDate } from "../../../functions/formatDate";
import { UserContext } from "../../../hooks/contexts/user_context";

export const ChatListItem = ({ chat, updateOpenedChat }) => {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch the user
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
          key={chat}
          onClick={() => updateChatContext()}>
          <Avatar url={user?.photoURL} />
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
