import { Timestamp } from "firebase/firestore";

export class Story {
  storyId: string;
  storyTeller: string;
  storyType: string;
  hasCaption: boolean;
  caption: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;

  constructor(
    storyId: string,
    storyTeller: string,
    storyType: string,
    hasCaption: boolean,
    caption: string,
    createdAt: Timestamp,
    updatedAt: Timestamp
  ) {
    this.storyId = storyId;
    this.storyTeller = storyTeller;
    this.storyType = storyType;
    this.hasCaption = hasCaption;
    this.caption = caption;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
