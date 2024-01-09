import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export class UserController {
  async fetchUserDetails(userId: string) {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        return userData;
      } else {
        return "User not found";
      }
    } catch (error) {
      console.error(error);
    }
  }

  async fetchUserDetailsByUsername(username: string) {
    try {
      const usersRef = collection(db, "users");
      const userDocSnapshot = query(
        usersRef,
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(userDocSnapshot);
      if (!querySnapshot.empty) {
        // Assuming there's only one user with a given username
        const userData = querySnapshot.docs[0].data();
        return userData;
      } else {
        return "User not found";
      }
    } catch (error) {
      console.error(error);
    }
  }
}
