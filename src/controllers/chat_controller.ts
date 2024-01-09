import { collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { db } from "../firebase/firebase";

export class ChatController {
  async fetchChatMessages(
    chatId: string,
    onDataReceived: (data: any[]) => void
  ) {
    const { user } = useAuth();
    try {
      const chatsRef = collection(
        db,
        `users/${user?.uid}/chats/${chatId}/messages`
      );

      // Using onSnapshot to get real-time updates
      const unsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
          // Handle each document here
          messages.push(doc.data());
        });

        // Call the provided callback with the messages
        onDataReceived(messages);
      });

      // Return the unsubscribe function
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  }
}
