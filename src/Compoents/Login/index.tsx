import React, { useState } from "react";
// import gym from 'src/assests/gym.jpg'
import gym from "@/assests/gym.jpg";

const AuthForm: React.FC = () => {
  const [passwordValue, setPasswordValue] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="forms-container px-12 relative  flex justify-center items-center w-full h-full top-0 left-0">
      <div className="absolute flex justify-center top-0 border-b-2 rounded-b-full w-full h-64 gap-4 flex-col bg-red-500 items-center">
        <img src={gym} alt="" />
        <h2 className="text-4xl font-extrabold dark:text-white">
          {" "}
          <span>Hey Gym</span>
        </h2>{" "}
        <div className="w-64 flex justify-center items-center text-center dark:text-white">
          <span className="font-semibold text-lg">
            Push harder than yesterday if you want a different tomorrow.
          </span>
        </div>
      </div>
      <form className="flex justify-center flex-col items-center">
        <h2 className="text-3xl text-gray-700 mb-4">Sign in</h2>
        <div className="input-field flex items-center bg-gray-200 rounded-full px-4 py-2 mb-4 w-full max-w-md">
          <i className="material-symbols-outlined text-gray-400 mr-4">person</i>
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent outline-none text-gray-600 font-medium w-full"
            required
          />
        </div>
        <div className="input-field flex items-center bg-gray-200 rounded-full px-4 py-2 mb-4 w-full max-w-md">
          <i className="material-symbols-outlined text-gray-400 mr-4">lock</i>
          <input
            type={`${isVisible ? "text" : "password"}`}
            placeholder="Password"
            className="bg-transparent outline-none text-gray-600 font-medium w-full"
            required
            onChange={(e) => handlePasswordChange(e)}
            value={passwordValue}
          />
          <i
            className="material-symbols-outlined text-gray-500"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "visibility" : "visibility_off"}
          </i>
        </div>
        <button
          type="submit"
          className="btn bg-rose-500 text-white font-bold rounded-full py-2 px-8 transition-colors hover:bg-rose-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
