import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";

const TodoTitle = ({ todoID }) => {
  const { getTodoByID } = useContext(TodoContext);
  const todo = getTodoByID(todoID);
  if (todo.todoDescription) {
    return (
      <div className="p-2 rounded-3xl w-fit h-8 flex items-center text-s">
        {todo.todoDescription.length > 30
          ? `${todo.todoDescription.slice(0, 20)}...`
          : todo.todoDescription}
      </div>
    );
  } else {
    return null;
  }
};

export default TodoTitle;
