import { Button } from "@/Components/common/Button";
import Label from "@/Components/common/FormUi/Label";
import Input from "@/Components/common/Input";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Registration() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  const handleDeleteImage = () => {
    console.log("handle delete");
  };

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <div className="h-full w-full relative overflow-hidden bg-white">
      <h1 className="text-3xl text-rose-600 font-medium pt-4 px-4 pb-2">
        Hey Gym
      </h1>
      <div className="bg-rose-600 h-[50%]  w-full px-4 pt-6 pr-10">
        <div className="text-white absolute z-10 p-4 pt-6 justify-start items-start  h-[87%] border border-gray-300    w-[92%] rounded-xl  bg-white flex  flex-col gap">
          <div>
            <h1 className="text-2xl font-medium text-black">
              Welcome to HeyGym
            </h1>
            <span className="text-gray-700 text-lg font-medium">
              Let's get started
            </span>
          </div>
          <div className="w-full h-[35rem] pt-6 px-2  flex flex-col gap-10 overflow-y-auto overflow-x-hidden items-start justify-start">
            <div className="flex gap-2 w-full">
              <Input label="First Name" className="w-full" required />
              <Input label="Last Name" className="w-full" required />
            </div>
            <div className="flex gap-2 w-full">
              <Input label="Address" className="w-full" required />
              <Input
                label="Contact"
                className="w-full"
                type="number"
                required
              />
            </div>
            <div className="w-full">
              <Input label="Email" type="email" required />
            </div>
            <div className="gender flex flex-col justify-center w-full items-center">
              <h2 className="text-md font-semibold text-gray-700">
                Select your gender
              </h2>
              <div className="max-w-sm mx-auto mt-2 w-full justify-center rounded-lg shadow-md flex gap-10">
                <Input label="Male" type="radio" name="gender" value="male" />
                <Input
                  label="Female"
                  type="radio"
                  name="gender"
                  value="female"
                />
                <Input label="Other" type="radio" name="gender" value="other" />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col w-full">
                <Label
                  htmlFor="Join Date"
                  className="text-lg text-gray-500"
                  required
                >
                  Membership Start Date
                </Label>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy/MM/dd"
                  className="rounded-md p-2 w-full bg-white text-white border border-gray-500"
                  placeholderText="Select Date"
                />
              </div>
              <div className="flex gap-2 justify-start items-start h-full w-full">
                <div className="h-full justify-end items-end w-full  ">
                  <Label
                    htmlFor="Duration"
                    className="text-lg text-gray-500"
                    required
                  >
                    Membership Duration
                  </Label>
                  <Input
                    label="Duration"
                    required
                    placeholder="Months"
                    labelClassName="hidden"
                    className="!w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col  relative items-start justify-start ">
              <Label
                htmlFor="Upload Photo"
                className="text-lg text-gray-500 font-medium mb-2 "
                required
              >
                Upload Photo
              </Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4 border border-0.5 border-gray-500 rounded-md p-1 w-full"
              />
              <i
                onClick={handleDeleteImage}
                className="absolute material-symbols-outlined bottom-[1.25rem] right-2 text-red-500 rounded-full p-1"
                aria-label="Delete image"
              >
                delete
              </i>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Button className="bg-rose-600  rounded-xl py-2 text-md font-medium hover:bg-rose-700  ">
              Register Now
            </Button>
            <Button className="bg-rose-600  rounded-xl py-2 font-medium hover:bg-rose-700 ">
              Reset Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
