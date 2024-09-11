import React, { useState } from "react";
import Label from "../common/FormUi/Label";
// import gym from "@/assests/gym.jpg";

const Login: React.FC = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="forms-container  relative flex-col w-screen  flex  sm:flex-row  items-center justify-end rounded-3xl overflow-hidden    h-full top-0 left-0">
      <div className="flex flex-col top-0 absolute   w-full items-start   h-64 sm:h-full sm:w-[60%]  bg-gradient-to-r pl-6 justify-center   from-rose-600 from-20% to-rose-900 to-80% ">
        {/* <img src={gym} alt="" className="w-full h-full object-cover" /> */}
        <span className="text-3xl text-white font-medium">Hello </span>
        <span className="text-3xl text-white font-medium">Sign in! </span>
      </div>

      <form className="flex border z-10 rounded-3xl h-[73%] bottom-0 justify-start border-white pt-8 bg-white flex-col items-center px-8 w-full sm:px-52 sm:w-[40%] ">
        <h2 className="text-3xl text-white mb-4">Sign in</h2>
        <div className="input-field flex  flex-col   py-2 mb-4 min-w-72 max-w-md">
          <Label className="text-rose-800 !text-lg" htmlFor="username">
            Username
          </Label>
          <input
            type="text"
            className="bg-transparent border-b-2  border-b-gray-400 focus:border-b-gray-700 outline-none text-gray-600 font-medium w-full"
          />
        </div>
        <div className="input-field flex flex-col relative  px-4 py-2 mb-4 w-full min-w-72 max-w-md">
          <Label className="text-rose-800 !text-lg" htmlFor="username">
            Password
          </Label>

          <input
            type={`${isVisible ? "text" : "password"}`}
            placeholder="***************"
            className="bg-transparent border-b-2  border-b-gray-400 focus:border-b-gray-700 outline-none text-gray-600 font-medium w-full"
            required
            onChange={(e) => handlePasswordChange(e)}
            value={passwordValue}
          />
          <i
            className="material-symbols-outlined right-4 bottom-3 absolute text-gray-600"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "visibility" : "visibility_off"}
          </i>
        </div>
        <div className="flex gap-2 pr-4 text-white justify-end items-end w-full  ">
          {/* <div className="flex h-full w-full justify-center items-center gap-1">
            <input
              type="checkbox"
              name=""
              id=""
              className=" bg-gray-500 accent-gray-400 border border-black checked:bg-gray-700 w-4 h-4 rounded f"
            />
            <span className="text-sm text-black w-44">Remember me</span>
          </div> */}

          <span className="text-black font-medium">Forgot Password</span>
        </div>
        <button
          type="submit"
          className="btn mt-6 bg-gradient-to-r  bg-rose-500 text-white font-bold rounded-full py-2 w-[92%] transition-colors from-rose-900 from-20% to-rose-600 to-80%"
        >
          Login
        </button>
        <div className="flex flex-col w-full justify-end items-end h-full pb-12 pr-4 ">
          <span className="font-sm">Don't have Account?</span>
          <span className="font-medium">Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
