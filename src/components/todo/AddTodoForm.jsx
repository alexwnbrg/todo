import { useState, useContext } from "react";
import Button from "../ui/Button";
import UserInput from "../ui/UserInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "../ui/Checkbox";
import { TodoContext } from "../../contexts/TodoContextProvider";
import { UserContext } from "../../contexts/UserContextProvider";

const AddTodoForm = () => {
  const [isImportant, setIsImportant] = useState(false);
  const [date, setDate] = useState(new Date());
  const [todoDescription, setTodoDescription] = useState("");

  const { handleAddTodo, isModalOpen } = useContext(TodoContext);
  const { getUserID } = useContext(UserContext);

  const userID = getUserID();

  // logic for important checkbox
  const handleCheck = () => {
    setIsImportant((prev) => !prev);
  };

  // logic for submitting todo
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only validate if form is being submitted
    if (todoDescription.trim() === "") {
      // Display validation error
      return;
    }
    handleAddTodo(e, todoDescription, date, isImportant, userID);

    // reset state for new todo
    setIsImportant(false);
    setDate(new Date());
    setTodoDescription("");
  };

  // Prevents form from submitting when modal is closed
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isModalOpen) {
      e.preventDefault();
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      noValidate
    >
      <label>What To Do?</label>
      <UserInput
        value={todoDescription}
        onChange={(e) => {
          setTodoDescription(e.target.value);
        }}
        isRequired={true}
        autoFocus={true}
      />

      <label>When's It Due?</label>
      <DatePicker
        className="border-solid border-2 py-1 w-full text-MidGray bg-LightPurple rounded-md text-center hover:cursor-pointer"
        selected={date}
        onChange={(date) => setDate(date)}
        isRequired
      />
      <div className="flex gap-4">
        <label className="block">Important:</label>
        <Checkbox onClick={handleCheck} />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodoForm;
