import { Avatar } from "../avatar";

export const ChatHeader = ({
  partyB,
  updateVideoStream,
  updateShowPartyDetails,
}: any) => {
  function makeVideoCall() {
    // Attempt to get user media
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        updateVideoStream(stream);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error accessing user media:", error.name, error.message);

        // Check if the error is due to permission denied
        if (
          error.name === "NotAllowedError" ||
          error.name === "PermissionDeniedError"
        ) {
          // Prompt the user to change permissions
          alert(
            "Please grant permission to access camera and microphone. Check your browser settings."
          );
        }
      });
  }

  function showChatDetails() {
    updateShowPartyDetails(true);
  }
  return (
    <div className="flex items-center justify-between sticky top-0 bg-slate-300/80 px-5 z-10">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => showChatDetails()}>
        <div className="w-12">
          <Avatar url={partyB?.photoURL} />
        </div>
        <div>
          <h3 className="font-bold text-xl">{partyB?.name}</h3>
          <span className="text-sm text-slate-500">
            {partyB?.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <i
          className="fa-solid fa-video text-slate-500 cursor-pointer"
          onClick={() => makeVideoCall()}></i>
        <i className="fa-solid fa-phone text-slate-500 cursor-pointer"></i>
      </div>
    </div>
  );
};
