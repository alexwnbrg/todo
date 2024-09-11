import React, { useContext } from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { TodoContext } from "../../contexts/TodoContextProvider";

const ImportantFlag = ({ todoID }) => {
  const { getTodoByID, toggleImportant } = useContext(TodoContext);
  const todo = getTodoByID(todoID);
  const isImportant = todo.important;
  return (
    <div
      className={`hover:cursor-pointer hover:scale-105 hover:opacity-90 active:scale-95 transition-all w-8 h-8 rounded-full border-OrangeLightShade border-2 flex justify-center items-center ${
        isImportant ? "bg-Orange" : ""
      }`}
      onClick={() => {
        toggleImportant(todoID, isImportant);
      }}
    >
      <AiOutlineFlag
        className={`w-4 h-4 ${isImportant ? "text-PurpleLightShade" : ""}`}
      />
    </div>
  );
};

export default ImportantFlag;
