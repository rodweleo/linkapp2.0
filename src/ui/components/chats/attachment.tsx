interface attachmentTypes {
  attachment: File;
  updateAttachment: any;
}

export const Attachment = ({
  attachment,
  updateAttachment,
}: attachmentTypes) => {
  function removeAttachment() {
    updateAttachment(attachment);
  }

  function viewAttachment() {
    console.log("Viewing file: " + attachment);
  }
  return (
    <div
      className="rounded-3xl border border-slate-400 py-1 bg-slate-300 bg-opacity-50 flex items-center justify-around gap-2.5 w-auto px-5 cursor-pointer"
      onClick={() => viewAttachment()}>
      <p className=" overflow-ellipsis ">{attachment.name}</p>
      <i
        className="fa-solid fa-x scale-75 cursor-pointer text-red-500/50"
        onClick={() => removeAttachment()}></i>
    </div>
  );
};
