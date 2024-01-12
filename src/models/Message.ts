import { Timestamp } from "firebase/firestore";

export class Message {
  chatId: string;
  sender: string;
  body: string;
  isDelivered: boolean;
  isRead: boolean;
  createdAt: Timestamp;
  hasAttachment: boolean;
  constructor({
    sender,
    body,
    createdAt,
    chatId,
    isDelivered,
    isRead,
    hasAttachment,
  }: {
    sender: string;
    body: string;
    receiver: string;
    createdAt: Timestamp;
    chatId: string;
    isDelivered: boolean;
    isRead: boolean;
    hasAttachment: boolean;
  }) {
    this.chatId = chatId;
    this.sender = sender;
    this.body = body;
    this.createdAt = createdAt;
    this.isDelivered = isDelivered;
    this.isRead = isRead;
    this.hasAttachment = hasAttachment;
  }
}
