import { auth } from "../firebase/firebase";

export const useAuth = () => {
  return { user: auth.currentUser };
};
