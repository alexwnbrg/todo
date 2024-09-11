import { useContext } from "react";
import { auth } from "../../config/firebase";
import Button from "../ui/Button";
import { UserContext } from "../../contexts/UserContextProvider";

const UserDropdownMenu = ({ isOpen, setIsOpen }) => {
  const { isLoggedIn, signInUserWithGoogle, signUserOut } =
    useContext(UserContext);
  return (
    <>
      {isOpen && (
        <div className="w-fit p-10 mt-3 absolute left-1/2 transform -translate-x-1/2 rounded-xl bg-LightGray flex flex-col gap-5 justify-center items-center shadow-lg ">
          {isLoggedIn ? (
            <>
              <h1 className="text-nowrap ">{`Logged in as ${auth.currentUser.email}`}</h1>
              <Button
                onClick={() => {
                  signUserOut();
                  setIsOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  signInUserWithGoogle();
                  setIsOpen(false);
                }}
              >
                Login With Google
              </Button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserDropdownMenu;
