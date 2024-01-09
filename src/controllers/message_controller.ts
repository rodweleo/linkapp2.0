import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

export class MessagesApi {
  async sendMessage(sendermessage: string) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "messages"), {
      name: "Tokyo",
      body: message,
    });
    console.log("Document written with ID: ", docRef.id);
  }
}
