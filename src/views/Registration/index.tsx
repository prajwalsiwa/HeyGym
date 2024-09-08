import Label from "@/Components/common/FormUi/Label";
import Input from "@/Components/common/Input";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Registration() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {

      console.log(file)
      // setSelectedImage(file);
      // const previewUrl = URL.createObjectURL(file);
      // setPreview(previewUrl);
    }
  };

  const handleDeleteImage = () => {
    console.log("handle delete")
    // setSelectedImage(null);
    // setPreview(null);
  };

  const handleDateChange = (date: Date | null) => {

    setStartDate(date)
    
  }

  return (
    <div className="text-white py-10 px-2 w-full  bg-gray-700 overflow-auto flex justify-center items-center flex-col gap-10">
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
      <div className="gender flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">Select your gender</h2>
        <div className="max-w-sm mx-auto mt-2 w-full rounded-lg shadow-md flex gap-10">
          <Input label="Male" type="radio" name="gender" value="male" />
          <Input label="Female" type="radio" name="gender" value="female" />
          <Input label="Other" type="radio" name="gender" value="other" />
        </div>
      </div>
      <div className="flex gap-2 justify-end items-end">
        <div className="flex flex-col gap-2">
          <Label htmlFor="Join Date" className="text-lg" required>
            Membership Start Date
          </Label>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="rounded-md p-2 w-full bg-gray-700 text-white border border-gray-500"
            placeholderText="Select Date"
          />
        </div>
        <div>
          <Label htmlFor="Duration" className="text-lg" required>
            Membership Duration
          </Label>
          <Input
            label="Duration"
            required
            placeholder="Months"
            labelClassName="hidden"
          />
        </div>
      </div>
      <div className="w-full flex flex-col  relative items-start justify-start ">
        <Label
          htmlFor="Upload Photo"
          className="text-lg font-semibold mb-2 text-white"
          required
        >
          Upload Photo
        </Label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 border border-0.5 rounded-md p-1 w-full"
        />
        <i
          onClick={handleDeleteImage}
          className="absolute material-symbols-outlined bottom-[1.25rem] right-2 text-red-500 rounded-full p-1"
          aria-label="Delete image"
        >
          delete
        </i>
      </div>
      <div className="flex gap-4">
        <div>
          <button className="w-[10rem] text-md  h-[2.75rem] py-[0.62rem] px-[1.25rem] gap-[0.62rem]  rounded-[0.5rem] border-solid border-[#1D49A7] bg-white text-[#1D49A7] font-semibold text-[0.875rem]">
            Submit
          </button>
        </div>
        <div className="relative ">
          <i className="material-symbols-outlined absolute text-blue-900 top-2 left-2">
            restart_alt
          </i>
          <button className="w-[10rem] text-md  h-[2.75rem]  py-[0.62rem] px-[1.25rem] gap-[0.62rem] pl-8 rounded-[0.5rem] border-solid border-[#1D49A7] bg-white text-[#1D49A7] font-semibold text-[0.875rem]">
            <span className="w-full">Clear all Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
