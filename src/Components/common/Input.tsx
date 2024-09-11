/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, forwardRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

interface InputPropsTypes {
  label: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  name?: string;
  checked?: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputPropsTypes>(
  (
    {
      label,
      type = "text",
      value: initialValue = "",
      onChange,
      placeholder = "",
      className = "",
      inputClassName = "",
      labelClassName = "",
      name = "",
      checked = false,
      required = false,
    },
    ref
  ) => {
    const [dropdownRef, isOpen, handleToggle] = useOutsideClick();
    const [value, setValue] = useState(initialValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange && onChange(newValue);
    };

    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        {type === "radio" ? (
          <label className="inline-flex items-center cursor-pointer">
            <input
              ref={ref}
              type="radio"
              name={name}
              value={value}
              checked={checked}
              onChange={handleInputChange}
              className={`form-radio h-5 w-5 transition-all ${
                value === "male"
                  ? "text-blue-600"
                  : value === "female"
                  ? "text-pink-600"
                  : "text-green-600"
              } ${inputClassName}`}
            />
            <span className={`ml-2 ${labelClassName} text-gray-600`}>{label}</span>
          </label>
        ) : (
          <>
            <label
              htmlFor={label}
              className={`absolute transition-all cursor-text text-gray-500  gap-1 flex ${
                isOpen || value ? "bottom-12 left-0" : "top-2 left-4"
              } ${labelClassName}`}
            >
              {label}
              {required && <span className="text-red-500">*</span>}
            </label>
            <input
              ref={ref}
              type={type}
              id={label}
              value={value}
              onClick={handleToggle}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={`bg-gray-50 border border-box border-gray-300 transition-all text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-11  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName}`}
            />
          </>
        )}
      </div>
    );
  }
);

export default Input;
