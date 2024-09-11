import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const TodoBox = () => {
  return (
    <section className="row-[2/4] col-span-2 rounded-3xl bg-[#fff] flex flex-col p-10 overflow-scroll">
      <TodoHeader />
      <TodoList />
    </section>
  );
};

export default TodoBox;
