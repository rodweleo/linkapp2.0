import { signInWithPopup } from "firebase/auth";
import { provider } from "../../../authentication/google_auth_provider";
import { auth } from "../../../firebase/firebase";
import { setCookie } from "../../../functions/setCookie";
import { useState } from "react";
import { SpinnerLoader } from "../loaders/spinner";
import { useNavigate } from "react-router-dom";

export const SignInWithGoogle = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function signInWithGoogle() {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setCookie("linkapp_access_token", result.user.refreshToken, 7);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <button
      className="bg-white w-full flex items-center leading-9 justify-center gap-2 rounded-md"
      onClick={signInWithGoogle}>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <>
          <img
            src="src/assets/images/icons8-google.svg"
            alt="Google Logo"
            className="h-5"
          />
          Sign in With Google
        </>
      )}
    </button>
  );
};
