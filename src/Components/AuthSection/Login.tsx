import React, { useState } from "react";
import gym from "@/assests/gym.jpg";

const Login: React.FC = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="forms-container  relative flex-col w-screen  flex gap-36 sm:flex-row  items-center  h-full top-0 left-0">
      <div className="flex flex-col justify-center top-0 w-full  border h-64 sm:h-full sm:w-[60%] gap-4  items-center">
        <img src={gym} alt="" className="w-full h-full object-cover" />
      </div>

      <form className="flex justify-center flex-col items-center px-12 sm:px-52 sm:w-[40%] ">
        <h2 className="text-3xl text-white mb-4">Sign in</h2>
        <div className="input-field flex items-center bg-gray-200 rounded-full px-4 py-2 mb-4 min-w-72 max-w-md">
          <i className="material-symbols-outlined text-gray-600 mr-4">person</i>
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none text-gray-600 font-medium w-full"
            required
          />
        </div>
        <div className="input-field flex items-center bg-gray-200 rounded-full px-4 py-2 mb-4 w-full min-w-72 max-w-md">
          <i className="material-symbols-outlined text-gray-600 mr-4">lock</i>
          <input
            type={`${isVisible ? "text" : "password"}`}
            placeholder="Password"
            className="bg-transparent outline-none text-gray-600 font-medium w-full"
            required
            onChange={(e) => handlePasswordChange(e)}
            value={passwordValue}
          />
          <i
            className="material-symbols-outlined text-gray-600"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "visibility" : "visibility_off"}
          </i>
        </div>
        <div className="flex gap-2  pl-4 text-white justify-start items-center w-full">
          <input
            type="checkbox"
            name=""
            id=""
            className=" bg-gray-500 accent-gray-400 border border-black checked:bg-gray-700 w-4 h-4 rounded f"
          />
          <span className="text-sm w-44">Remember me</span>
        </div>
        <button
          type="submit"
          className="btn mt-6 bg-rose-500 text-white font-bold rounded-full py-2 px-8 transition-colors hover:bg-rose-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
