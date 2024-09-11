import { useContext } from "react";

import Button from "../components/ui/Button";

import { UserContext } from "../contexts/UserContextProvider";

const Login = () => {
  const { signInUserWithGoogle } = useContext(UserContext);
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <h1>Login to add todos</h1>
      <Button buttonType="primary" onClick={signInUserWithGoogle}>
        Log In
      </Button>
    </div>
  );
};

export default Login;
