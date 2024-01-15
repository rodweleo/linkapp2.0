import { useEffect, useState } from "react";
export const ChatMedia = () => {
  function getActiveTabDisplay() {
    switch (activeMediaTab) {
      case "documents":
        return <h1>No Recent Documents.</h1>;
      case "audio":
        return <h1>No Recent Audio</h1>;
      case "video":
        return <h1>No Recent Video</h1>;
      case "links":
        return <h1>No Recent Links</h1>;
      default:
        return <h1>No Recent Documents</h1>;
    }
  }

  const [activeMediaTab, setActiveMediaTab] = useState("");
  useEffect(() => {
    // get the media items
    const mediaItems = document.getElementsByClassName("media-item");
    mediaItems[0].classList.add("bg-slate-400", "rounded-md", "text-white");

    //adding the hover effect to each span
    for (let i = 0; i < mediaItems.length; i++) {
      mediaItems[i].addEventListener("mouseover", () => {
        mediaItems[i].classList.add("cursor-pointer");
      });
    }
    for (let i = 0; i < mediaItems.length; i++) {
      const mediaItem = mediaItems[i];
      if (mediaItem !== mediaItems[0]) {
        mediaItem.classList.remove("bg-slate-400", "rounded-md", "text-white");
      }
    }

    const handleMediaItemClick = (clickedItem) => {
      for (let i = 0; i < mediaItems.length; i++) {
        const mediaItem = mediaItems[i];
        if (mediaItem !== clickedItem) {
          mediaItem.classList.remove(
            "bg-slate-400",
            "rounded-sm",
            "text-white"
          );
        }
      }
      clickedItem.classList.add("bg-slate-400", "rounded-sm", "text-white");
      //set the active tab
      setActiveMediaTab(clickedItem.innerText.toString().toLowerCase());
    };

    for (let i = 0; i < mediaItems.length; i++) {
      const mediaItem = mediaItems[i];
      mediaItem.addEventListener("click", () => {
        handleMediaItemClick(mediaItem);
      });
    }

    return () => {
      for (let i = 0; i < mediaItems.length; i++) {
        const mediaItem = mediaItems[i];
        mediaItem.removeEventListener("click", () => {
          handleMediaItemClick(mediaItem);
        });
      }
    };
  }, []);
  return (
    <div className="flex flex-col w-full h-fit">
      <h2 className="font-bold">Media</h2>
      <section className="border border-slate-300 rounded-sm">
        <ul className="flex justify-between bg-slate-300 p-2.5 rounded-sm">
          <li className={`media-item px-2.5 py-1 `}>Documents</li>
          <li className="media-item px-2.5 py-1">Audio</li>
          <li className="media-item px-2.5 py-1">Video</li>
          <li className="media-item px-2.5 py-1">Links</li>
        </ul>
        <div>{getActiveTabDisplay()}</div>
      </section>
    </div>
  );
};
