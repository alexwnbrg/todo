import Logo from "../ui/Logo";

const Sidebar = () => {
  return (
    <section className="bg-DarkPurple  h-auto col-[1/2] py-5 px-2 flex flex-col items-center justify-between gap-y-3 ">
      <Logo location="sidebar" />
    </section>
  );
};

export default Sidebar;
