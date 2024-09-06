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
}

const Input = forwardRef<HTMLInputElement, InputPropsTypes>(
  ({
    label,
    type = "text",
    value: initialValue = "",
    onChange,
    placeholder = "",
    className = "",
    inputClassName = "",
    labelClassName = "",
  }) => {
    const [dropdownRef, isOpen, handleToggle] = useOutsideClick();
    const [value, setValue] = useState(initialValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange && onChange(newValue);
    };

    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <label
          htmlFor={label}
          className={`absolute transition-all cursor-text text-gray-500 dark:text-gray-400 ${
            isOpen || value ? "bottom-12 left-0" : "top-2 left-4"
          } ${labelClassName}`}
        >
          {label}
        </label>
        <input
          type={type}
          id={label}
          value={value}
          onClick={handleToggle}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-300 transition-all text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-11 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName}`}
        />
      </div>
    );
  }
);

export default Input;
