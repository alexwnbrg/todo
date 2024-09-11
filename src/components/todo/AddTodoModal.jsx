import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";
import ExitButton from "../ui/ExitButton";
import AddTodoForm from "./AddTodoForm";

const AddTodoModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(TodoContext);

  if (!isModalOpen) return null;

  // esc to exit todo modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isModalOpen]);

  return (
    <div className="fixed inset-0 bg-opacity-20 bg-[#000] flex z-50 items-center justify-center">
      <div className="relative opacity-100 bg-LightGray h-fit p-10 rounded-lg border-2 border-solid border-DarkPurple ">
        <ExitButton />
        <AddTodoForm />
      </div>
    </div>
  );
};

export default AddTodoModal;
