import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";
import { AiOutlineCheck } from "react-icons/ai";

const TodoComplete = ({ todoID }) => {
  const { getTodoByID, toggleComplete } = useContext(TodoContext);
  const todo = getTodoByID(todoID);
  const isCompleted = todo.isCompleted;
  return (
    <div
      onClick={() => {
        toggleComplete(todoID, isCompleted);
      }}
      className={`hover:cursor-pointer hover:scale-105 hover:opacity-90 active:scale-95 transition-all w-8 h-8 rounded-full border-OrangeLightShade border-2 flex justify-center items-center ${
        isCompleted ? "bg-DarkPurple" : ""
      }
       `}
    >
      <AiOutlineCheck
        className={`w-4 h-4 ${isCompleted ? "text-[#fff]" : ""}`}
      />
    </div>
  );
};

export default TodoComplete;
