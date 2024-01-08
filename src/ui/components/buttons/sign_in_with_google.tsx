import { signInWithPopup } from "firebase/auth";
import { provider } from "../../../authentication/google_auth_provider";
import { auth } from "../../../firebase/firebase";
import { setCookie } from "../../../functions/setCookie";

export const SignInWithGoogle = () => {
  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        setCookie("linkapp_access_token", result.user.refreshToken, 7);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <button
      className="bg-white w-full flex items-center leading-9 justify-center gap-2 rounded-md"
      onClick={signInWithGoogle}>
      <img src="src/assets/images/icons8-google.svg" alt="" className="h-5" />
      Sign in With Google
    </button>
  );
};
