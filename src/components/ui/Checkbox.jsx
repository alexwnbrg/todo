import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Checkbox = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className="w-6 h-6 bg-PurpleLightShade rounded-sm border-solid border-2 border-LightPurple/50 hover:cursor-pointer hover:brightness-105 hover:shadow-DarkPurple active:scale-[.9] transition-all flex items-center justify-center"
      onClick={() => {
        setIsChecked((prev) => !prev);
        onClick();
      }}
    >
      {isChecked && <AiOutlineCheck size={20} color="#1b0155" />}
    </div>
  );
};

export default Checkbox;
