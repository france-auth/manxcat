import React from "react"

import { TaskList } from "../../data";
import { useState } from "react"

interface ButtonProps {
  name: string
  className?: string
  onClick?: () => void
}
const TaskButton: React.FC<ButtonProps> = ({name, onClick, className}) => {
  return (
    <div className={`border-[3px] border-solid border-[#000807] rounded-full z-50 ${className}`}
    >
      <button
      type="button"
        onClick={onClick}
        className="text-xs font-bold w-full flex items-center justify-center py-[6px] xs:px-3 xx:px-[18px]">
        {name}
      </button>
    </div>
  )
}

const TaskCards = () => {
  interface ButtonState {
    label: string;
    bgColor: string;
  }

  const [buttonStates, setButtonStates] = useState<ButtonState[]>(
    TaskList.map(() => ({
      label: 'START', // Initial button text
      bgColor: "bg-[#EB8A90]", // Initial button background color
    }))
  );

  const handleClick = (id: number) => {
    const currentButtonState = buttonStates[id];
    let nextLabel = '';
    let nextBgColor = '';

    // Logic to transition between states
    if (currentButtonState.label === 'START') {
      nextLabel = 'CHECK';
      nextBgColor = 'bg-white';
      setTimeout(() => updateButtonState(id, nextLabel, nextBgColor), 1000);
    } else if (currentButtonState.label === 'CHECK') {
      nextLabel = 'CLAIM';
      nextBgColor = 'bg-[#42E2B8]';
      setTimeout(() => updateButtonState(id, nextLabel, nextBgColor), 2000);
    } else if (currentButtonState.label === 'CLAIM') {
      nextLabel = 'COMPLETED';
      nextBgColor = 'bg-[#EB8A90]';
      updateButtonState(id, nextLabel, nextBgColor);
    }
  };

  const updateButtonState = (id: number, label: string, bgColor: string) => {
    setButtonStates((prevStates) =>
      prevStates.map((buttonState, i) =>
        i === id ? { ...buttonState, label, bgColor } : buttonState
      )
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {TaskList.map(({title}, id) => (
          <div key={id} 
            className={`cards flex my-3 p-3 justify-between bg-[#EFD0CA80] 
            ${buttonStates[id].label === "COMPLETED" 
              ? "opacity-40" 
              : ""}`
          }>
            <div className="flex gap-2">
              <div className="flex flex-col p-2 bg-[#EFD0CA] rounded-full justify-center">
                <img 
                  src="/wallet.png" 
                  alt="wallet" 
                  className="xs:w-6 xs:h-6 xr:w-8 xr:h-7"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold xs:text-xs uppercase text-wrap">
                  {title}
                </h1>
                <div className="text-xs flex gap-2">
                  <p className="">+500</p>
                  <div className="flex gap-1">
                    <img src="/coin.png" alt="coin" className="w-4"/>
                    <p>GOLD COINS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <TaskButton 
                name={buttonStates[id].label} 
                className={buttonStates[id].bgColor}
                onClick={() => handleClick(id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default TaskCards