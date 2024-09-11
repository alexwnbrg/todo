import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";
import TodoTitle from "./TodoTitle";
import TodoDueDate from "./TodoDueDate";
import ImportantFlag from "./ImportantFlag";
import TodoComplete from "./TodoComplete";
import { IoCloseCircle } from "react-icons/io5";

const TodoCard = ({ todoID }) => {
  const { handleDeleteTodo, getTodoByID } = useContext(TodoContext);
  const todo = getTodoByID(todoID);

  // Handles potentially undefined data if useSort hook hasn't updated
  if (!todo) {
    return null;
  }

  return (
    <div
      className={`shadow-md rounded-2xl p-3 pl-14 flex items-center gap-4 relative overflow-hidden ${
        todo.isCompleted ? "opacity-45" : ""
      }`}
    >
      <div className="w-10 h-full flex items-center justify-center bg-Orange absolute left-0">
        <IoCloseCircle
          className="hover:cursor-pointer text-2xl text-MidGray "
          onClick={() => {
            handleDeleteTodo(todoID);
          }}
        />
      </div>
      <TodoComplete todoID={todoID} />
      <TodoTitle todoID={todoID} />
      <TodoDueDate todoID={todoID} />
      <ImportantFlag todoID={todoID} />
    </div>
  );
};

export default TodoCard;
