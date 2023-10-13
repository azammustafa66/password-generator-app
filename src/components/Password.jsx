import { useState } from "react";
import { useSelector } from "react-redux";

import iconCopy from "../assets/images/icon-copy.svg";

const Password = () => {
  const [isCopied, setIsCopied] = useState(false);
  const generatedPassword = useSelector((store) => store.password.password);

  const handleCopyToClickBoard = async (password) => {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(!isCopied);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      alert("Failed to copy!");
    }
  };

  return (
    <>
      <h1 className="text-2xl text-[#817D92] mb-2">Password Generator</h1>
      <div className="w-[343px] h-16 md:w-[540px] md:h-20 flex items-center justify-between bg-[#24232C] p-3">
        <h1
          className={`text-2xl font-bold ${
            generatedPassword ? "text-white" : "text-[#817D92]"
          }`}
        >
          {generatedPassword || "P4$5W0rD!"}
        </h1>
        <button className="text-lg font-bold text-[#A4FFAF]">
          {isCopied ? (
            "Copied"
          ) : (
            <img
              src={iconCopy}
              alt="Copy to clipboard"
              className="cursor-pointer"
              onClick={() => handleCopyToClickBoard(generatedPassword)}
            />
          )}
        </button>
      </div>
    </>
  );
};

export default Password;
