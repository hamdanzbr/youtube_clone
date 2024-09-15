import React from 'react';
import { buttonList } from '../utils/constants';

const Buttons = () => {
  return (
    <div className="relative p-5">
      <div className="flex gap-2  whitespace-nowrap pb-4 rounded scroll-smooth">
        {buttonList.map((button) => (
          <button key={button} className="bg-gray-800 p-2 rounded-lg whitespace-nowrap m-2 font-bold text-white">
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
