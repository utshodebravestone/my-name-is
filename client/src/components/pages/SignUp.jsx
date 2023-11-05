import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../shared/Input";
import Button from "../shared/Button";
import { signup } from "../../utils/api";

const SignUp = () => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    for (const field of Object.values(auth)) {
      if (field.length === 0) {
        return;
      }
    }
    signup({ ...auth });
  };

  return (
    <form
      className="mt-10 flex flex-col items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-5xl mb-5">Sign Up</h1>

      <div className="w-1/2 my-2">
        <Input
          type="text"
          label="Username"
          onChange={(username) => setAuth((auth) => ({ ...auth, username }))}
        />
        {submitted && auth.username.length === 0 && (
          <p className="text-red-700">Username can&apos;t be empty</p>
        )}
      </div>
      <div className="w-1/2 my-2">
        <Input
          type="email"
          label="Email"
          onChange={(email) => setAuth((auth) => ({ ...auth, email }))}
        />
        {submitted && auth.email.length === 0 && (
          <p className="text-red-700">Email can&apos;t be empty</p>
        )}
      </div>
      <div className="w-1/2 my-2">
        <Input
          type="password"
          label="Password"
          onChange={(password) => setAuth((auth) => ({ ...auth, password }))}
        />
        {submitted && auth.password.length === 0 && (
          <p className="text-red-700">Password can&apos;t be empty</p>
        )}
      </div>

      <div className="w-1/2 mt-5">
        <Button label={"Sign Up"} onClick={handleSubmit} />
      </div>

      <p className="mt-5 text-xl">Already have an account?</p>

      <div className="w-1/2 mt-5">
        <Button
          label={"Go to Sign In Page"}
          onClick={() => navigate("/signin")}
        />
      </div>
    </form>
  );
};

export default SignUp;
