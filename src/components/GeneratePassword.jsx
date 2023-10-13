import { useState } from "react";
import { useDispatch } from "react-redux";

import { includeOptions } from "../utils/constants";
import {
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeCharacters,
  generatePassword,
} from "../utils/passwordGenerationSlice";
import iconRightArrow from "../assets/images/icon-arrow-right.svg";

const GeneratePassword = () => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordStrength, setPasswordStrength] = useState("MEDIUM");

  const dispatch = useDispatch();

  const handleInputSlider = (e) => {
    const length = Number(e.target.value);
    setPasswordLength(length);

    if (length === 5) {
      setPasswordStrength("VERY WEAK");
    } else if (length < 8) {
      setPasswordStrength("WEAK");
    } else if (length <= 10) {
      setPasswordStrength("MEDIUM");
    } else {
      setPasswordStrength("STRONG");
    }
  };

  const getColor = (index) => {
    switch (passwordStrength) {
      case "VERY WEAK":
        return index === 1 ? "bg-[#F64A4A]" : "bg-gray-300";
      case "WEAK":
        return index <= 2 ? "bg-[#F64A4A]" : "bg-gray-300";
      case "MEDIUM":
        return index <= 3 ? "bg-[#F8CD65]" : "bg-gray-300";
      case "STRONG":
        return "bg-[#A4FFAF]";
      default:
        return "bg-gray-300";
    }
  };

  const handleIncludeOptions = (option) => {
    switch (option) {
      case "Include Uppercase Letters":
        dispatch(includeUppercase());
        break;
      case "Include Lowercase Letters":
        dispatch(includeLowercase());
        break;
      case "Include Numbers":
        dispatch(includeNumbers());
        break;
      case "Include Symbols":
        dispatch(includeCharacters());
        break;
    }
  };

  return (
    <div className="w-[343px] h-[423px] md:w-[540px] md:h-[520px] bg-[#24232C] mt-6 p-4 md:p-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">Character Length</p>
          <p className="text-[#A4FFAF] text-3xl">{passwordLength}</p>
        </div>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(generatePassword(passwordLength));
          }}
        >
          <input
            type="range"
            min={5}
            max={15}
            className="mt-8"
            value={passwordLength}
            onInput={handleInputSlider}
          />
        </form>
      </div>

      <div className="mt-8 flex flex-col mb-5">
        {includeOptions.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={option}
              value={option}
              className="w-5 h-5"
              onClick={() => handleIncludeOptions(option)}
            />
            <label htmlFor={option} className="text-base md:text-lg font-bold">
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#18171F] w-[311px] h-14 md:w-[476px] md:h-[72px] flex items-center justify-between p-2 md:p-5">
        <h1 className="text-[#817D92] font-bold text-lg">STRENGTH</h1>
        <div className="flex gap-x-1 items-center">
          <p className="mr-1">{passwordStrength}</p>
          <div className={`w-2 h-7 ${getColor(1)}`}></div>
          <div className={`w-2 h-7 ${getColor(2)}`}></div>
          <div className={`w-2 h-7 ${getColor(3)}`}></div>
          <div className={`w-2 h-7 ${getColor(4)}`}></div>
        </div>
      </div>

      <div>
        <button
          className="w-[311px] h-14 md:w-[476px] md:h-16 flex items-center justify-center mt-8 gap-x-3 bg-[#A4FFAF] text-black font-bold text-lg hover:bg-transparent hover:text-[#A4FFAF] hover:border hover:border-[#A4FFAF] transition-all duration-200 ease-in hover:transition-all hover:duration-200 hover:ease-in"
          onClick={() => dispatch(generatePassword(passwordLength))}
        >
          GENERATE
          <img src={iconRightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default GeneratePassword;
