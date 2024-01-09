import { Timestamp } from "firebase/firestore";

export class Message {
  sender: string;
  body: string;
  receiver: string;
  createdAt: Timestamp;
  constructor(
    sender: string,
    body: string,
    receiver: string,
    createdAt: Timestamp
  ) {
    this.sender = sender;
    this.body = body;
    this.receiver = receiver;
    this.createdAt = createdAt;
  }
}
