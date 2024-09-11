import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";

import { AiOutlineCloseCircle } from "react-icons/ai";

const ExitButton = () => {
  const { setIsModalOpen } = useContext(TodoContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AiOutlineCloseCircle
      className="absolute top-3 right-3 transition duration-200 hover:cursor-pointer"
      color={isHovered ? "#e18335" : "black"}
      size={30}
      onClick={() => {
        setIsModalOpen(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default ExitButton;
