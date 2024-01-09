export const ChatListItemSkeleton = () => {
  return (
    <div className="flex h-fit gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md w-full">
      <div className="h-14 w-20 bg-slate-300 rounded-full"></div>
      <div className="w-full">
        <h2 className="font-bold h-5 w-2/4 bg-slate-300 rounded-md"></h2>
        <p className="text-slate-300 h-5 w-full"></p>
      </div>
    </div>
  );
};
