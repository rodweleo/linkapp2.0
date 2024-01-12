import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../hooks/contexts/user_context";
import { Avatar } from "../avatar";
import { SignOut } from "../buttons/sign_out";

export const MainNavigation = () => {
  const userContext = useContext<any>(UserContext);

  return (
    <nav className="sticky h-screen flex flex-col justify-between items-center bg-gray-900">
      <ul className="flex flex-col items-center gap-5">
        <li>
          <Link to="profile">
            <Avatar url={userContext?.photoURL} />
          </Link>
        </li>

        <li>
          <NavLink to="home">
            <i className="fa-solid fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </li>

        <li>
          <NavLink to="calls">
            <i className="fa-solid fa-phone"></i>
          </NavLink>
        </li>

        <li>
          <NavLink to="contacts">
            <i className="fa-regular fa-address-book"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="notifications">
            <i className="fa-regular fa-bell"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="chats">
            <i className="fa-regular fa-message"></i>
          </NavLink>
        </li>
        <li></li>
      </ul>

      <ul className="flex flex-col">
        <NavLink
          to="settings"
          className="flex items-center justify-center pb-5">
          <i className="fa-solid fa-gear"></i>
        </NavLink>
        <SignOut />
      </ul>
    </nav>
  );
};
