import { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";
import TodoCard from "./TodoCard";
import SortDropdown from "../ui/SortDropdown";

import { useSort } from "../../hooks/useSort";

const TodoList = () => {
  const [sortOption, setSortOption] = useState("Due Date");
  const { todoData, isSearched, filteredList } = useContext(TodoContext);

  // Filter data if searching, otherwise use original todoData
  const filteredData = isSearched ? filteredList : todoData;

  // Call useSort to sort data via sort dropdown option
  const sortedData = useSort(filteredData, sortOption);

  return (
    <div>
      <div className="flex items-center justify-between">
        <SortDropdown setSortOption={setSortOption} />
      </div>
      <ul className="flex justify-around flex-col gap-5 py-5 ">
        {sortedData.map((todo) => (
          <li key={todo.id}>
            <TodoCard todoID={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
