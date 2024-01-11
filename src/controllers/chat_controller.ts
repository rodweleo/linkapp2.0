import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export class ChatController {
  async fetchChatMessages(
    chatId: string,
    onDataReceived: (data: any[]) => void
  ) {
    try {
      const messagesRef = collection(db, `chats/${chatId}/messages`);

      // Using onSnapshot to get real-time updates
      const unsubscribe = onSnapshot(
        query(messagesRef, orderBy("createdAt", "asc")),
        (querySnapshot) => {
          const messages: any = [];
          querySnapshot.forEach((doc) => {
            // Handle each document here
            messages.push(doc.data());
          });

          // Call the provided callback with the messages
          onDataReceived(messages);
        }
      );

      // Return the unsubscribe function
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  }

  async fetchUserChats(email: string, onChatsReceived: any) {
    try {
      const chatsRef = collection(db, "chats");

      //iterate through the documents and select the chats of the above user as either party A or Party B
      const q = query(chatsRef, where("partyA", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      // Using onSnapshot to get real-time updates
      const unsubscribe: any = onSnapshot(q, (querySnapshot) => {
        const chats: any = [];
        querySnapshot.forEach((doc) => {
          // Handle each document here
          chats.push(doc.data());
        });

        onChatsReceived(chats);

        return unsubscribe;
      });
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  }
}
