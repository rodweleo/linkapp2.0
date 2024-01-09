export const ChatBubble = ({ message }) => {
  return (
    <div className="max-w-64 right-2.5 min-h-10 bg-white rounded-l-md rounded-tr-md p-2.5 shadow-xl font-medium">
      <p>{message.body}</p>
    </div>
  );
};
