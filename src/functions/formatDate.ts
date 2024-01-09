import { Timestamp } from "firebase/firestore";

export const formatDate = (timestamp: Timestamp) => {
  //const hour = timestamp.toDate().getHours();
  //const minutes = timestamp.toDate().getMinutes();
  const date = timestamp.toDate().getDate();
  const month =
    timestamp.toDate().getMonth() < 10
      ? `0${timestamp.toDate().getMonth() + 1}`
      : timestamp.toDate().getMonth() + 1;
  //const year = timestamp.toDate().getFullYear();
  return `${month}-${date}`;
};
