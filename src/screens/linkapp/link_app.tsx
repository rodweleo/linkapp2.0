export const LinkApp = () => {
  return (
    <>
      <header>
        <button>Sign Out</button>
      </header>
      <main>
        <section>
          <h1>Messages</h1>
        </section>

        <form className="m-5 p-1 flex gap-2.5 items-center justify-between border border-slate-300 w-2/4 rounded-md">
          <div className="flex gap-2.5 items-center w-full">
            <i className="fa-solid fa-camera"></i>
            <input
              type="text"
              className="w-full outline-none border-none"
              placeholder="Type a message..."
            />
          </div>
          <button type="reset">
            <i className="fa-solid fa-paper-plane  p-2.5 cursor-pointer"></i>
          </button>
        </form>
      </main>
    </>
  );
};
