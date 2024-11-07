
/*
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: '100', color: '#f39c12', image: '/coin.png' },
  { option: '', color: '#e67e22', image: 'path/to/default-icon.png' },
  { option: 'USDT', color: '#f39c12', image: 'path/to/usdt-icon.png' },
  { option: '', color: '#e67e22', image: 'path/to/potion-icon.png' },
  { option: '500', color: '#f39c12', image: 'path/to/coin-icon.png' },
  { option: '', color: '#e67e22', image: 'path/to/chest-icon.png' },
  { option: '1000', color: '#f39c12', image: 'path/to/coin-icon.png' },
  { option: 'MANX', color: '#e67e22', image: 'path/to/shield-icon.png' }
];

const SpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(2); // Default prize index

  const startSpin = () => {
    setPrizeIndex(Math.floor(Math.random() * data.length)); // Randomize prize index
    setMustSpin(true); // Start spinning
  };

  const handleStopSpin = () => {
    setMustSpin(false); // Stop spinning
  };

  return (
      <main className="flex flex-col justify-center items-center mb-9 z-50">
        <div className="h-[300px] w-[300px] p-2 rounded-full">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeIndex}
            data={data}
            backgroundColors={['#f39c12', '#e67e22']}
            textColors={['#ffffff']}
            outerBorderWidth={6}
            outerBorderColor="#000" // Define a color for outer border
            onStopSpinning={handleStopSpin} // Callback for when spinning stops
          />
        </div>
          <button
            type="button" 
            onClick={startSpin} 
            className="p-3 rounded-lg border cursor-pointer"
          >
            Spin the Wheel!
          </button>
      </main>
  );
};

export default SpinWheel;
 */
import React from "react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: '100', color: '#f39c12', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: 'cd', color: '#e67e22', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: 'USDT', color: '#f39c12', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: 'ss', color: '#e67e22', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: '500', color: '#f39c12', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: 'ss', color: '#e67e22', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: '1000', color: '#f39c12', image: { src: '/coin.png', alt: 'Coin icon' } },
  { option: 'MANX', color: '#e67e22', image: { src: '/coin.png', alt: 'Coin icon' } }
];


const SpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(2); // Default prize index

  const startSpin = () => {
    setPrizeIndex(Math.floor(Math.random() * data.length)); // Randomize prize index
    setMustSpin(true); // Start spinning
  };

  const handleStopSpin = () => {
    setMustSpin(false); // Stop spinning
  };

  return (
    <main className="flex flex-col justify-center items-center mb-9">
      {/* Add a temporary border to test visibility */}
      <div className="h-[300px] w-[300px] p-2 rounded-full border-4 border-solid border-[black]">
      </div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeIndex}
          data={data}
          backgroundColors={['#f39c12', '#e67e22']}
          textColors={['#ffffff']}
          outerBorderWidth={6}
          outerBorderColor="#000000"
          onStopSpinning={handleStopSpin}
          innerBorderColor="#fff"
          innerBorderWidth={2}
          innerRadius={5}
        />
      <button
        type="button"
        onClick={startSpin}
        className="p-3 rounded-lg border cursor-pointer mt-4"
      >
        Spin the Wheel!
      </button>
    </main>
  );
};

export default SpinWheel;
