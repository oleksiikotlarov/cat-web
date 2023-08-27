import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface option {
  name: string;
  value: string;
}

interface DropdownProps {
  dropdownOptions: option[];
  optionalClass?: string;
  selectedOption: option
  setSelectedOption: (option: option) => void;
  setLoading: (bool: boolean) => void;
}


const Dropdown: React.FC<DropdownProps> = ({ dropdownOptions, optionalClass, selectedOption, setSelectedOption, setLoading }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const changeSelectedOption = (option: option) => {
    setSelectedOption(option)
    setLoading(true)
    setDropdownOpen(false);
  };

  return (
    <div className={`relative mx-1 z-20 before:${optionalClass}`}>
      <button className="focus:outline-none w-full text-sm" onClick={toggleDropdown}>
        <div className={`flex justify-center items-center py-2 px-6  bg-[#F8F8F7] text-[#8C8C8C] cursor-pointer ${isDropdownOpen ? "rounded-t-lg" : "rounded-lg"}`}>
          <h1 className="mx-auto px-2">{selectedOption.name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none">
            <g clip-path="url(#clip0_1_147)">
              <path
                d="M6.59406 9.17417L11.7538 4.01436C12.0821 3.68616 12.0821 3.15395 11.7538 2.82587C11.4256 2.4978 10.8935 2.4978 10.5655 2.82587L5.99993 7.39154L1.43458 2.82606C1.10635 2.49792 0.574264 2.49792 0.24617 2.82606C-0.0820567 3.15414 -0.0820567 3.68628 0.24617 4.01447L5.40591 9.17431C5.57003 9.33836 5.78492 9.42029 5.9999 9.42029C6.21498 9.42029 6.43002 9.3382 6.59406 9.17417Z"
                fill="#8C8C8C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_147">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="matrix(0 -1 1 0 0 12)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 w-full text-sm bg-[#F8F8F7] text-[#8C8C8C] overflow-x-hidden overflow-y-auto whitespace-nowrap rounded-b-lg flex flex-col pb-1 max-h-96">
            {dropdownOptions.map((option: option) => (
              <button
                key={option.name}
                className="focus:outline-none pr-4"
                onClick={() => changeSelectedOption(option)}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-row justify-start items-center py-2 px-6 cursor-pointer">
                  <h1 className="mx-4">{option.name}</h1>
                </motion.div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
