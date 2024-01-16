import { ToggleSwitch } from "../buttons/toggle_switch";

export const ChatSettings = () => {
  return (
    <ul className="leading-loose">
      <li className="flex items-center justify-between">
        <strong>Mute notifications</strong>
        <ToggleSwitch />
      </li>
      <li>
        <div className="flex flex-col">
          <strong>Disappering Messages</strong>
          <span className="text-slate-400 ">
            <strong>Off</strong>
          </span>
        </div>
      </li>
    </ul>
  );
};
