import Input from "@/Components/common/Input";
// import { useState } from "react";

export default function Registration() {
  // const [gender, setGender] = useState<string>("");

  // const handleGenderChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setGender(event.target.value);
  // };

  return (
    <div className="text-white  py-10 px-2 w-full  bg-gray-700 overflow-auto flex justify-center items-center flex-col gap-10 ">
      <h1 className="text-2xl">Register Here</h1>

      <div className="flex gap-2">
        <Input label="First Name" required />
        <Input label="Last Name" required />
      </div>
      <div className="flex gap-2">
        <Input label="Address" required />
        <Input label="Contact" type="number" required />
      </div>
      <div className="w-full">
        <Input label="Email" type="email" required />
      </div>
      <div className=" gender flex flex-col justify-center items-center ">
        <h2 className="text-lg font-semibold ">Select your gender</h2>
        <div className="max-w-sm mx-auto mt-2 w-full rounded-lg shadow-md flex gap-10">
          <Input
            label="Male"
            type="radio"
            name="gender"
            value="male"
            // checked={gender === "male"}
          />
          <Input
            label="Female"
            type="radio"
            name="gender"
            value="female"
            // checked={gender === "female"}
          />
          <Input
            label="Other"
            type="radio"
            name="gender"
            value="other"
            // checked={gender === "other"}
          />
        </div>
      </div>
    </div>
  );
}
