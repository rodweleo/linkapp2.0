import { useState } from "react";

export const ToggleSwitch = () => {
  const [state, setState] = useState(false);
  return (
    <div
      className={`${
        state
          ? "bg-slate-300 border-slate-400"
          : "bg-green-300 border-green-600"
      } h-4 w-10  rounded-2xl border `}>
      <div
        className={` h-full w-2/4 rounded-full cursor-pointer ${
          state ? "bg-slate-400" : "bg-green-600 translate-x-5 "
        }`}
        onClick={() => setState(!state)}></div>
    </div>
  );
};
