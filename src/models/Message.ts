import { Timestamp } from "firebase/firestore";

export class Message {
  sender: string;
  body: string;
  receiver: string;
  chatId: string;
  isRead: boolean;
  isDelivered: boolean;
  createdAt: Timestamp;
  constructor({
    sender,
    body,
    receiver,
    createdAt,
    chatId,
    isDelivered,
    isRead,
  }: {
    sender: string;
    body: string;
    receiver: string;
    createdAt: Timestamp;
    chatId: string;
    isDelivered: boolean;
    isRead: boolean;
  }) {
    this.sender = sender;
    this.body = body;
    this.receiver = receiver;
    this.createdAt = createdAt;
    this.chatId = chatId;
    this.isDelivered = isDelivered;
    this.isRead = isRead;
  }
}
