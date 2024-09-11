import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";

const TodoDueDate = ({ todoID }) => {
  const { getTodoByID } = useContext(TodoContext);
  const todo = getTodoByID(todoID);

  if (todo.dateDue) {
    return (
      <div className="bg-OrangeLightShade text-Orange text-[12px] p-2 rounded-3xl w-fit h-8 flex items-center ml-auto">
        {todo.dateDue.toDate().toLocaleDateString()}
      </div>
    );
  } else {
    return null;
  }
};

export default TodoDueDate;
