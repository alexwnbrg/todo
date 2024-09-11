import { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const { searchTodos } = useContext(TodoContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchTodos(searchText);
  }, [searchText]);

  return (
    <div className="h-12 rounded-full w-[50%] flex bg-[#fff]  items-center px-3 overflow-hidden">
      <AiOutlineSearch className="opacity-25 size-6" />
      <input
        placeholder="Search Todos"
        className="w-full h-[90%] px-5"
        value={searchText}
        onChange={(e) => {
          e.preventDefault;
          setSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
