import { useContext, useRef, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContextProvider";

const UserInput = ({ autoFocus = false, isRequired, ...props }) => {
  const inputRef = useRef(null);
  const { isModalOpen } = useContext(TodoContext);

  // autofocus first form field when todo modal opens
  useEffect(() => {
    if (inputRef && isModalOpen) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <input
      className="border-2 h-8 px-4 py-4 w-full rounded-lg"
      {...props}
      required={isRequired && true}
      ref={inputRef}
    ></input>
  );
};

export default UserInput;
