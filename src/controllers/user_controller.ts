import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

export class UserController {
  async fetchUserDetails(email: string) {
    try {
      const usersRef = collection(db, "users");
      const userDocSnapshot = query(usersRef, where("email", "==", email));
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

  async fetchUserStories(email: string) {
    try {
      const storiesRef = collection(db, "stories");
      const storiesDocSnapshot = query(
        storiesRef,
        where("storyTeller", "==", email)
      );
    } catch (error) {
      console.log(error);
      return "Error fetching stories";
    }
  }
}
