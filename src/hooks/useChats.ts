import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "./useAuth";

export const useChats = () => {
  const [chats, setChats] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // Assuming your user object has an 'id' property
        const userId = user?.uid;

        // Fetch the user's chats from the database
        const userChatsCollection = collection(db, `users/${userId}/chats`);
        const querySnapshot = await getDocs(userChatsCollection);

        // Convert the query snapshot to an array of chats
        const fetchedChats: any = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Update the state with the fetched chats
        setChats(fetchedChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []); // Run the effect whenever the user changes

  return chats;
};
