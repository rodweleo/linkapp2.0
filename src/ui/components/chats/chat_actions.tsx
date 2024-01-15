export const ChatActions = ({ user }) => {
  return (
    <ul className="divide-y bg-slate-300 p-2.5 rounded-md leading-loose flex flex-col gap-2">
      <li className="text-red-500">
        <button>
          <i className="fa-solid fa-user-xmark"></i>
          &nbsp; Block {user?.name}
        </button>
      </li>
      <li className="text-red-500">
        <button>
          <i className="fa-solid fa-trash"></i>
          &nbsp; Report {user?.name}
        </button>
      </li>
      <li className="text-red-500">
        <button>
          <i className="fa-solid fa-trash"></i>
          &nbsp; Delete Chat
        </button>
      </li>
    </ul>
  );
};
