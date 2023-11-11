import Div from "@/lib/Div";
import React, { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MyContext from "../context/MyContext";

const LoginForm = () => {
  const contextdata = useContext(MyContext);
  const [loginDetails, setLoginDetails] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const setLoginUpData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginDetails((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  console.log(contextdata?.LoginToken);


  return (
    <Div className="w-full  h-full px-5 pt-7 ">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          contextdata?.loginPostRequest(loginDetails);
        }}
        className="w-full"
      >
        <h3 className="text-center text-[25px] font-extrabold text-gray-400">
          Login
        </h3>

        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="loginEmail"
          >
            Email
          </label>
          <input
            id="loginEmail"
            type="email"
            value={loginDetails.email}
            onChange={(e) => setLoginUpData(e)}
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <Div className="flex flex-col  space-y-1">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="loginPassword"
          >
            Password
          </label>
          <input
            id="loginPassword"
            value={loginDetails.password}
            onChange={(e) => setLoginUpData(e)}
            name="password"
            type="password"
            required
            placeholder="Password"
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <button className="px-6 py-2 mt-6 mx-auto block bg-blue-600 text-white rounded-md w-full hover:bg-blue-700">
          Submit
        </button>
        <h4 className="text-center  mt-5">or</h4>
      </form>

      <Div className="flex flex-col space-y-2 justify-start mt-2">
        <button className="flex items-center justify-center px-8 rounded-md py-2 bg-gray-200  space-x-3">
          <FcGoogle className="" />
          <span> Login with Google</span>
        </button>

        <button className="flex items-center justify-center px-8 rounded-md py-2 bg-gray-200  space-x-3">
          <FaFacebook className="text-blue-600" />
          <span> Login with Facebook</span>
        </button>
      </Div>
    </Div>
  );
};

export default LoginForm;
