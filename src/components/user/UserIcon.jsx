import React, { useState, useContext } from "react";
import { auth } from "../../config/firebase";
import { AiOutlineUser } from "react-icons/ai";
import UserDropdownMenu from "./UserDropdownMenu";
import { UserContext } from "../../contexts/UserContextProvider";

const UserIcon = () => {
  const { isLoggedIn } = useContext(UserContext);

  const [userListisOpen, setUserListIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => {
          setUserListIsOpen((prev) => !prev);
        }}
        className="border border-solid rounded-full overflow-hidden h-10 w-10 flex items-center justify-center hover:cursor-pointer "
      >
        {/* set user img or use default react icon */}
        {isLoggedIn && auth.currentUser.photoURL ? (
          <img
            src={auth.currentUser.photoURL}
            referrerPolicy="no-referrer"
          ></img>
        ) : (
          <AiOutlineUser fontSize={20} />
        )}
      </div>
      <UserDropdownMenu isOpen={userListisOpen} setIsOpen={setUserListIsOpen} />
    </div>
  );
};

export default UserIcon;
