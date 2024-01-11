import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../../functions/deleteCookie";

export const SignOut = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    //sign out from firebase
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        //on successful sign out, delete the access token from the cookies

        deleteCookie();
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <i
      className="fa-solid fa-arrow-right-from-bracket text-red-500/70 cursor-pointer"
      onClick={() => handleSignOut()}></i>
  );
};
