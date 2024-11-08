
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
 *//* 
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
 */
import React, { useRef, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 211, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

const SpinWheel: React.FC = () => {
  const chartRef = useRef<ChartJS<'pie'> | null>(null);
  const [finalValue, setFinalValue] = useState<string>('Click On The Spin Button To Start');

  const data = Array(12).fill(16);
  const pieColors = ['#f39c12', '#e67e22'];

  const handleSpin = () => {
    const randomDegree = Math.floor(Math.random() * 355);
    setFinalValue('Good Luck!');
    const chartInstance = chartRef.current;

    if (chartInstance) {
      let count = 0;
      let resultValue = 101;
      const interval = setInterval(() => {
        if (chartInstance.options.rotation! >= 360) {
          count += 1;
          resultValue -= 5;
          chartInstance.options.rotation = 0;
        } else if (count > 15 && chartInstance.options.rotation === randomDegree) {
          setFinalValue(`Value: ${rotationValues.find(val => randomDegree >= val.minDegree && randomDegree <= val.maxDegree)?.value || 0}`);
          clearInterval(interval);
        } else {
          chartInstance.options.rotation! += resultValue;
          chartInstance.update();
        }
      }, 10);
    }
  };

  return (
    <div className="w-90 max-w-md h-full flex flex-col items-center bg-white p-12 rounded-lg shadow-lg relative">
      <Pie
        ref={chartRef}
        data={{
          labels: Array.from({ length: 12 }, (_, i) => i + 1),
          datasets: [{ data, backgroundColor: pieColors }]
        }}
        options={{
          responsive: true,
          plugins: {
            tooltip: { enabled: false },
            datalabels: { color: '#000', font: { size: 16 } },
          },
        }}
      />
      <button onClick={handleSpin} className="absolute inset-[52%] h-[10%] w-[10%] -translate-x-[62%] -translate-y-[47%] rounded-full bg-yellow-400 text-sm">
        Spin
      </button>
      <img src="/spinner-arrow.svg" alt="spinner-arrow" className="absolute top-1/2 right-4 w-8 rotate-90" />
      <div className="text-center text-lg mt-4 text-gray-800">{finalValue}</div>
    </div>
  );
};

export default SpinWheel;
