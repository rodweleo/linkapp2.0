import {
  Timestamp,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { Message } from "../models/Message";

export class MessagesApi {
  async sendMessage(message: Message): Promise<string> {
    //initiate firebase to send the message
    try {
      const chatRef = doc(db, "chats", message.chatId);
      const chatMessagesCollection = collection(
        db,
        `chats/${message.chatId}/messages`
      );
      const messageRef = await addDoc(chatMessagesCollection, {
        body: message.body,
        isDelivered: message.isDelivered,
        isRead: message.isRead,
        sender: message.sender,
        createdAt: Timestamp.now(),
      });

      if (messageRef.id !== "") {
        // Update the isDelivered status to true
        const messageDocRef = doc(
          db,
          `chats/${message.chatId}/messages/${messageRef.id}`
        );

        await updateDoc(messageDocRef, {
          isDelivered: true,
        });
      }

      //update the chat details (the updatedAt and the last message)
      await updateDoc(chatRef, {
        lastMessage: message.body,
        updatedAt: Timestamp.now(),
      });

      return "Message Sent.";
    } catch (error) {
      console.error(error);
      return "";
    }
  }
}
