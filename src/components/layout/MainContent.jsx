import Header from "./Header";
import TodoBox from "../todo/TodoBox";

const MainContent = () => {
  return (
    <section className="bg-BluelightShade col-[2/4] grid grid-rows-[10fr_70fr_20fr] grid-cols-[75fr_15fr] p-8 gap-5 overflow-hidden">
      <Header />
      <TodoBox />
    </section>
  );
};

export default MainContent;
