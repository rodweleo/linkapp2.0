import { useContext } from "react";
import { UserContext } from "../../../hooks/contexts/user_context";
import { Avatar } from "../avatar";

export const StoryListItem = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="flex gap-2 mt-2.5 ">
      <div className="w-12 border-4 border-blue-800/70 rounded-full cursor-pointer select-none">
        <Avatar url={userContext?.photoURL} />
      </div>
      <div>
        <strong>{userContext?.displayName}</strong>
        <p>Today, 09:05AM</p>
      </div>
    </div>
  );
};
