const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-LightPurple hover:opacity-90 transition duration-200 px-4 py-2 text-PurpleLightShade rounded-3xl w-fit text-nowrap hover:scale-105 active:scale-95	h-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
