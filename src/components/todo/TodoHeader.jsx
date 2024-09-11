import { useContext, useEffect } from "react";
import Button from "../ui/Button";
import { TodoContext } from "../../contexts/TodoContextProvider";

const TodoHeader = ({}) => {
  const { setIsModalOpen } = useContext(TodoContext);

  // "Enter" key to open todo modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setIsModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setIsModalOpen]);

  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-2xl  text font-bold">Todos</h1>

      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default TodoHeader;
