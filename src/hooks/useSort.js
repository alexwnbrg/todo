import { useState, useEffect } from "react";

export const useSort = (data, sortOption) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortTodos = (todos, option) => {
      return todos.slice().sort((a, b) => {
        if (option === "Due Date (DESC)") {
          return new Intl.Collator("en").compare(b.dateDue, a.dateDue);
        } else if (option === "Due Date (ASC)") {
          return new Intl.Collator("en").compare(a.dateDue, b.dateDue);
        } else if (option === "Alphabetical") {
          return new Intl.Collator("en").compare(
            a.todoDescription,
            b.todoDescription
          );
        } else if (option === "Important") {
          return new Intl.Collator("en").compare(b.important, a.important);
        }
      });
    };
    setSortedData(sortTodos(data, sortOption));
  }, [data, sortOption]);

  return sortedData;
};
