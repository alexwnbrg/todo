import logo from "../../assets/logo.png";

const Logo = ({ location }) => {
  return (
    <img
      src={logo}
      className="w-10 mb-10 mt-5 dark:hue-rotate-  rounded-sm"
    ></img>
  );
};

export default Logo;
