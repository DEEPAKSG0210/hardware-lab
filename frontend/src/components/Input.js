import React, { useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Inputfield = ({
  valueState = ["", (v) => {}],
  errorState = ["", (v) => {}],
  placeholder = "",
  type = "text",
  title = "",
  isDisabled = false,
  className = "w-full",
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`${className} flex flex-col items-start justify-center space-y-2`}
    >
      <label className="text-blue text-base">{title}</label>
      <div className="flex space-x-2 items-center w-full">
        <input
          disabled={isDisabled}
          type={type === "password" ? (hide ? "password" : "text") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            setError("");
          }}
          className={` outline-none border-b p-2 w-full first-letter:transition ease-in-out m-0 focus:outline-none focus:border-cloud bg-gray-200 rounded-lg`}
        />
        {type === "password" && (
          <button
            className="text-cloud p-2 border-2 bg-gray-500 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              setHide(!hide);
            }}
          >
            {hide ? (
              <AiFillEye size={24} />
            ) : (
              <AiOutlineEyeInvisible size={24} />
            )}
          </button>
        )}
      </div>
      {error.length !== 0 && (
        <div className="flex items-center space-x-2 text-xs text-red">
          <AiFillExclamationCircle />
          <p className="">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Inputfield;
