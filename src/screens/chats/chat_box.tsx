import { useContext, useEffect, useState } from "react";
import { MessagesApi } from "../../controllers/message_controller";

import { UserController } from "../../controllers/user_controller";
import { ChatContext } from "../../hooks/contexts/chat_context";
import { ChatMessages } from "./chat_messages";
import { UserContext } from "../../hooks/contexts/user_context";
import { Message } from "../../models/Message";
import { Timestamp } from "firebase/firestore";
import { Attachment } from "../../ui/components/chats/attachment";

export const ChatBox = () => {
  const chatContext = useContext(ChatContext);
  const userContext = useContext(UserContext);
  const [partyB, setPartyB] = useState(null);
  const [message, setMessage] = useState("");
  const [chooseAttachment, setChooseAttachment] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  useEffect(() => {
    try {
      new UserController()
        .fetchUserDetails(
          chatContext.participants.filter(
            (participant: string) => participant !== userContext.email
          )[0]
        )
        .then((response) => {
          setPartyB(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, [chatContext]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (message === "") {
      return;
    }

    const newMessage = new Message({
      sender: userContext.email,
      body: message,
      receiver: partyB.email, // Replace with the actual receiver's email
      createdAt: Timestamp.now(),
      chatId: chatContext.id, // Replace with the actual chat ID
      isDelivered: false,
      isRead: false,
    });

    const response = await new MessagesApi().sendMessage(newMessage);
    if (response === "") {
      return;
    }

    setMessage("");
  }

  useEffect(() => {
    function selectFile(type: string) {
      // Create a file input element
      const input = document.createElement("input");
      input.type = "file";
      // Set the accept attribute based on the selected type
      switch (type.toLowerCase()) {
        case "document":
          input.accept = ".doc, .docx, .pdf";
          break;
        case "image":
          input.accept = ".png, .jpg, .jpeg, .gif";
          break;
        case "audio":
          input.accept = ".mp3, .wav, .ogg";
          break;
        case "video":
          input.accept = ".mp4, .avi, .mkv";
          break;
        default:
          break;
      }

      // Trigger a click on the file input to open the file dialog
      input.click();

      // Handle the selected file (you can add an event listener for 'change' event)
      input.addEventListener("change", () => {
        const selectedFile = input.files[0];
        if (selectedFile) {
          // Check whether the selected file already exists in the attachments array
          const fileExists = attachments.some(
            (attachment) => attachment.name === selectedFile.name
          );

          if (!fileExists) {
            setAttachments((prevAttachments) => [
              ...prevAttachments,
              selectedFile,
            ]);
          } else {
            console.log("File Already Selected. Try another one.");
          }
        }
      });
    }
    //when a user clicks on the attachment icon, the attachment list pops up
    const attachmentListItems = document.getElementsByClassName(
      "attachment-list-item"
    );
    for (let i = 0; i < attachmentListItems.length; i++) {
      const attachmentListItem = attachmentListItems[i];
      attachmentListItem.addEventListener("click", () => {
        //select the span of the attachment list item
        const attachmentListItemLable =
          attachmentListItem.getElementsByTagName("span");
        selectFile(attachmentListItemLable[0].innerHTML);
      });
    }
  }, [chooseAttachment === true]);

  function deleteAttachment(file: File) {
    //remove the attachment from the array of attachments

    //step 1: filter the existing attachments and return the new attachments that dont contain the above attachment file
    const newAttachments = attachments.filter(
      (attachment) => attachment !== file
    );
    setAttachments(newAttachments);
  }
  return (
    <section className="h-screen w-full bg-slate-200 rounded-md flex flex-col items-center justify-between gap-1">
      <section className="w-full px-2.5 overflow-y-scroll h-screen mb-2">
        <h2 className="font-bold text-xl">{partyB?.name}</h2>
        <ChatMessages />
      </section>
      {chooseAttachment && (
        <section className="fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-5 relative">
            <i
              className="fa-solid fa-x absolute -top-10 -right-10 text-white p-2.5 rounded-full hover:text-red-600 hover:cursor-pointer hover:bg-slate-200"
              onClick={() => setChooseAttachment(false)}></i>
            <h1 className="text-center font-bold">Select Attachment</h1>
            <ul className="rounded-md leading-10 divide-y attachment-list">
              <li className="flex items-center gap-2.5 attachment-list-item">
                <i className="fa-regular fa-file"></i>
                <span>Document</span>
              </li>
              <li className="flex items-center gap-2.5 attachment-list-item">
                <i className="fa-regular fa-image"></i>
                <span>Image</span>
              </li>
              <li className="flex items-center gap-2.5 attachment-list-item">
                <i className="fa-regular fa-file-audio"></i>
                <span>Audio</span>
              </li>
              <li className="flex items-center gap-2.5 attachment-list-item">
                <i className="fa-solid fa-file-video"></i>
                <span>Video</span>
              </li>
            </ul>
          </div>
        </section>
      )}

      <section className="w-full flex justify-start gap-2.5 mb-2">
        {attachments.length > 0 &&
          attachments.map((attachment) => (
            <Attachment
              attachment={attachment}
              updateAttachment={deleteAttachment}
            />
          ))}
      </section>
      <form
        className="pl-2.5 flex gap-2.5 items-center justify-between border border-slate-300 w-full bg-white sticky bottom-0"
        onSubmit={(e) => handleSubmit(e)}>
        <div className="flex gap-2.5 items-center ">
          <input
            type="text"
            className="w-full outline-none border-none"
            placeholder="Type a message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-microphone"></i>
          <div className="relative">
            <i
              className="fa-solid fa-paperclip cursor-pointer"
              onClick={() => setChooseAttachment(true)}></i>
            {attachments.length > 0 && (
              <span className="font-bold text-sm text-blue-500 absolute -top-2 ">
                {attachments.length}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={message === ""}
            className={`${message === "" ? "disabled" : ""} bg-slate-300 `}>
            <i className="fa-solid fa-paper-plane  p-2.5 cursor-pointer"></i>
          </button>
        </div>
      </form>
    </section>
  );
};
