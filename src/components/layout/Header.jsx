import SearchBar from "../ui/SearchBar";
import UserHeader from "../user/UserHeader";

const Header = () => {
  return (
    <section className=" col-span-2 flex justify-evenly items-center px-5">
      <SearchBar />
      <UserHeader />
    </section>
  );
};

export default Header;
