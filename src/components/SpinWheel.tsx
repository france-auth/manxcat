/* import React, { useRef, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Import the type
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SpinWheel: React.FC = () => {
  const chartRef = useRef<ChartJS<'pie'> | null>(null);
  const [finalValue, setFinalValue] = useState<string>('Click On The Spin Button To Start');

  // Equal sizes for all pies
  const data = Array(12).fill(1);  // Equal pie slices
  const pieColors = [
    '#f39c12', '#e67e22', '#f39c12', '#e67e22', '#f39c12', '#e67e22',
    '#f39c12', '#e67e22', '#f39c12', '#e67e22', '#f39c12', '#e67e22'
  ];  // Alternating colors

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
          setFinalValue(`Value: ${Math.floor((randomDegree / 30) + 1)}`); // Determine the slice value
          clearInterval(interval);
        } else {
          chartInstance.options.rotation! += resultValue;
          chartInstance.update();
        }
      }, 10);
    }
  };

  return (
    <div className="w-full max-w-md h-full flex flex-col items-center bg-transparent p-5 rounded-full shadow-lg relative border-solid border-black border-4">
      <Pie
        ref={chartRef}
        data={{
          labels: Array.from({ length: 12 }, (_, i) => (i + 1).toString()),  // Labels from 1 to 12
          datasets: [{
            data,
            backgroundColor: pieColors,  // Alternating colors for better visibility
          }],
        }}
        options={{
          responsive: true,
          plugins: {
            tooltip: { enabled: false },
            datalabels: {
              color: '#000',
              font: { size: 16 },
              formatter: (_: number, context: unknown) => {
                const ctx = context as { chart: { data: { labels: string[] }; }; dataIndex: number };
                return ctx.chart.data.labels[ctx.dataIndex];
              },                // Use proper type
              anchor: 'center',
              align: 'center',
              rotation: 0,
            },
          },
        }}
      />
      <button onClick={handleSpin} className="absolute inset-[52%] h-[10%] w-[10%] -translate-x-[62%] -translate-y-[47%] rounded-full bg-yellow-400 text-sm">
        Spin
      </button>
      <img src="/spinner-arrow.svg" alt="spinner-arrow" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 rotate-90" />
      <div className="text-center text-lg mt-4 text-gray-800">{finalValue}</div>
    </div>
  );
};

export default SpinWheel;
 */
/* 
import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useUser } from "@/context/context"; // Assuming you're using some context for user data
import dynamic from "react-dynamic-import";
//import { UserData, UpdateData } from "./types"; // Assuming types are defined

const Wheel = dynamic(() => import("react-custom-roulette").then((mod) => mod.Wheel), { ssr: false });

const data = [
  { option: "100" },
  { option: "200" },
  { option: "300" },
  { option: "400" },
  { option: "500" },
  { option: "600" },
  { option: "700" },
  { option: "800" },
];

export const Roulette: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { user, setUser } = useUser(); // Assuming context is used for user state
  const [canSpin, setCanSpin] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [nextSpinTime, setNextSpinTime] = useState<Date | null>(null);
  const toast = useToast();

  const updateUserProfile = async (updatedFields: UpdateData) => {
    if (!user || !user.telegramId) {
      console.error("User data or telegramId is missing.");
      return;
    }

    try {
      const response = await fetch(`/api/updateprofile?userId=${user.telegramId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update profile:", errorText || "Unknown error");
        return null;
      }

      const updatedUser = await response.json();
      console.log("Profile updated successfully:", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const updateCountdown = () => {
    if (nextSpinTime) {
      const now = new Date();
      const difference = nextSpinTime.getTime() - now.getTime();

      if (difference <= 0) {
        setCanSpin(true);
        setTimeRemaining("Spin Now!");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    }
  };

  const handleSpinClick = async () => {
    if (!user) return;
    const now = new Date();
    if (!canSpin) {
      const countdown = nextSpinTime
        ? `Next spin available at: ${nextSpinTime.toLocaleTimeString()}`
        : "Please wait until tomorrow for your next spin.";
      toast({
        title: "Spin Unavailable",
        description: countdown,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      try {
        const newCoin = user.coins + parseInt(data[newPrizeNumber].option);
        await new Promise((resolve) => setTimeout(resolve, 12000)); // Wait for the wheel to start spinning
        const updatedUser = await updateUserProfile({ lastSpinTime: now, coins: newCoin });
        setUser(updatedUser);
      } catch (error) {
        console.log("Error updating user profile:", error);
      }
    }
  };

  useEffect(() => {
    const fetchSpinStatus = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/spinStatus?userId=${user.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch spin status");
          }
          const result = await response.json();

          if (result.canSpin) {
            setCanSpin(true);
          } else {
            setCanSpin(false);
            setNextSpinTime(new Date(result.nextSpinTime));
          }
        } catch (error) {
          console.error("Error fetching spin status:", error);
        }
      }
    };

    fetchSpinStatus();
  }, [user]);

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextSpinTime]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgGradient={"linear-gradient(360deg, #00283A 0%, #12161E 88.17%)"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={12}
        gap={{ base: 5, sm: 14 }}
        pb={32}
      >
        <Text color={"#93BAFF"} fontWeight={"700"} fontSize={"24px"}>
          Resource Roulette
        </Text>
        <Box
          bg={
            "linear-gradient(225deg, #FEDC31 16%, #FDC448 22.31%, #FC8682 35.67%, #FA2CD7 53.31%, #987CDB 70.57%, #33D0E0 87.83%)"
          }
          mt={{ base: 0, sm: 14 }}
          display={"flex"}
          flexDirection={"column"}
          p={{ base: "4px", sm: "5px" }}
          borderRadius={"50%"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            bg={
              "linear-gradient(225deg, #000604 16%, #303030 44.62%, #000604 87.83%)"
            }
            p={{ base: "10px", sm: "20px" }}
            borderRadius={"50%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              textColors={["white"]}
              fontSize={32}
              backgroundColors={[
                "#FE7A18",
                "#FC9612",
                "#1A95FF",
                "#E60C6A",
                "#6010F5",
                "#00766B",
                "#9D9D9D",
                "#FE3E0E",
              ]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </Box>
        </Box>
        <Button
          onClick={handleSpinClick}
          w={"342px"}
          h={"49px"}
          bg={"#4979d1"}
          boxShadow={"0px -2px 8px 0px #F8F9FD33 inset"}
          fontSize={"24px"}
          fontWeight={700}
          color={"#f5f5f5"}
          borderRadius={"20px"}
          _hover={{ bg: "#4979d1", outline: "none" }}
          isDisabled={!canSpin}
        >
          {canSpin ? "Spin and Win!" : timeRemaining}
        </Button>

        <Flex
          alignItems={"center"}
          gap={2}
          w={"292px"}
          h={"39px"}
          mt={{ base: 1, sm: -10 }}
          justifyContent={"center"}
        >
          <Box w={"6px"} h={"6px"} bg={"#8D9094"} borderRadius={"50%"} />
          <Box w={"6px"} h={"6px"} bg={"#8D9094"} borderRadius={"50%"} />

          <Text fontWeight={500} fontSize={"12px"} color={"#999999"}>
            You get one attempt per day, make it count
          </Text>

          <Box w={"6px"} h={"6px"} bg={"#8D9094"} borderRadius={"50%"} />
          <Box w={"6px"} h={"6px"} bg={"#8D9094"} borderRadius={"50%"} />
        </Flex>
      </Flex>
    </Box>
  );
};
 */
/* 
import React, { useState, useEffect } from "react";
import dynamic from "react-dynamic-import";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
//import { useUser } from "./context/context";
import { WheelData } from "react-custom-roulette"; // Adjust as needed for your library

// Dynamic import for Wheel component
const Wheel = dynamic(() => import("react-custom-roulette").then((mod) => mod.Wheel));

const data: WheelData[] = [
  { option: "100" },
  { option: "200" },
  { option: "300" },
  { option: "400" },
  { option: "500" },
  { option: "600" },
  { option: "700" },
  { option: "800" },
];

type UserData = {
  id: string;
  telegramId: string;
  username: string;
  photoUrl?: string;
  level: number;
  coins: number;
  taps: number;
  maxTaps: number;
  refillRate: number;
  lastRefillTime: Date;
  slots: number;
  referralCount: number;
  referredBy?: string;
  freeSpins: number;
  multitap: number;
  tapLimitBoost: number;
  tappingGuruUses: number;
  profitPerHour: number;
  lastEarningsUpdate?: Date;
  lastSpinTime?: Date;
  lastCheckIn?: Date;
  checkInStreak: number;
  createdAt: Date;
  updatedAt: Date;
};

type UpdateData = Partial<UserData>;

const SpinWheel: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { user, setUser } = useUser();
  const [canSpin, setCanSpin] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [nextSpinTime, setNextSpinTime] = useState<Date | null>(null);
  const toast = useToast();

  const updateUserProfile = async (updatedFields: UpdateData) => {
    if (!user || !user.telegramId) {
      console.error("User data or telegramId is missing.");
      return;
    }

    try {
      const response = await fetch(`/api/updateprofile?userId=${user.telegramId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update profile:", errorText || "Unknown error");
        return null;
      }

      const updatedUser = await response.json();
      console.log("Profile updated successfully:", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const updateCountdown = () => {
    if (nextSpinTime) {
      const now = new Date();
      const difference = nextSpinTime.getTime() - now.getTime();

      if (difference <= 0) {
        setCanSpin(true);
        setTimeRemaining("Spin Now!");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
    }
  };

  const handleSpinClick = async () => {
    if (!user) return;
    const now = new Date();
    if (!canSpin) {
      const countdown = nextSpinTime
        ? `Next spin available at: ${nextSpinTime.toLocaleTimeString()}`
        : "Please wait until tomorrow for your next spin.";
      toast({
        title: "Spin Unavailable",
        description: countdown,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      try {
        const newCoin = user.coins + parseInt(data[newPrizeNumber].option);
        await new Promise((resolve) => setTimeout(resolve, 12000)); // Ensure the wheel starts
        const updatedUser = await updateUserProfile({ lastSpinTime: now, coins: newCoin });
        setUser(updatedUser);
      } catch (error) {
        console.log("Error updating user profile:", error);
      }
    }
  };

  useEffect(() => {
    const fetchSpinStatus = async () => {
      if (user) {
        try {
          const response = await fetch(`/api/spinStatus?userId=${user.id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch spin status");
          }
          const result = await response.json();

          if (result.canSpin) {
            setCanSpin(true);
          } else {
            setCanSpin(false);
            setNextSpinTime(new Date(result.nextSpinTime));
          }
        } catch (error) {
          console.error("Error fetching spin status:", error);
        }
      }
    };

    fetchSpinStatus();
  }, [user]);

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextSpinTime]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgGradient="linear-gradient(360deg, #00283A 0%, #12161E 88.17%)"
      width="100vw"
      minHeight="100vh"
      alignItems="center"
      textColor="white"
      overflow="hidden"
    >
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt={12}
        gap={{ base: 5, sm: 14 }}
        pb={32}
      >
        <Text color="#93BAFF" fontWeight="700" fontSize="24px">
          Resource Roulette
        </Text>
        <Box
          bg="linear-gradient(225deg, #FEDC31 16%, #FDC448 22.31%, #FC8682 35.67%, #FA2CD7 53.31%, #987CDB 70.57%, #33D0E0 87.83%)"
          mt={{ base: 0, sm: 14 }}
          display="flex"
          flexDirection="column"
          p={{ base: "4px", sm: "5px" }}
          borderRadius="50%"
        >
          <Box
            display="flex"
            flexDirection="column"
            bg="linear-gradient(225deg, #000604 16%, #303030 44.62%, #000604 87.83%)"
            p={{ base: "10px", sm: "20px" }}
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              textColors={["white"]}
              fontSize={32}
              backgroundColors={[
                "#FE7A18",
                "#FC9612",
                "#1A95FF",
                "#E60C6A",
                "#6010F5",
                "#00766B",
                "#9D9D9D",
                "#FE3E0E",
              ]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </Box>
        </Box>
        <Button
          onClick={handleSpinClick}
          w="342px"
          h="49px"
          bg="#4979d1"
          boxShadow="0px -2px 8px 0px #F8F9FD33 inset"
          fontSize="24px"
          fontWeight={700}
          color="#f5f5f5"
          borderRadius="20px"
          _hover={{ bg: "#4979d1", outline: "none" }}
          isDisabled={!canSpin}
        >
          {canSpin ? "Spin and Win!" : timeRemaining}
        </Button>

        <Flex
          alignItems="center"
          gap={2}
          w="292px"
          h="39px"
          mt={{ base: 1, sm: -10 }}
          justifyContent="center"
        >
          <Box w="6px" h="6px" bg="#8D9094" borderRadius="50%" />
          <Box w="6px" h="6px" bg="#8D9094" borderRadius="50%" />

          <Text fontWeight={500} fontSize="12px" color="#999999">
            You get one attempt per day, make it count
          </Text>

          <Box w="6px" h="6px" bg="#8D9094" borderRadius="50%" />
          <Box w="6px" h="6px" bg="#8D9094" borderRadius="50%" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default SpinWheel;

import React, { lazy, Suspense, useState, useEffect } from "react";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import { useUser } from "./context/context";
import { WheelData } from "react-custom-roulette";

// Use React.lazy for dynamic import
const Wheel = lazy(() => import("react-custom-roulette").then((mod) => ({ default: mod.Wheel })));

const data: WheelData[] = [
  { option: "100" },
  { option: "200" },
  { option: "300" },
  { option: "400" },
  { option: "500" },
  { option: "600" },
  { option: "700" },
  { option: "800" },
];

// Your UserData and UpdateData types

type UserData = {
  id: string;
  telegramId: string;
  username: string;
  photoUrl?: string;
  level: number;
  coins: number;
  taps: number;
  maxTaps: number;
  refillRate: number;
  lastRefillTime: Date;
  slots: number;
  referralCount: number;
  referredBy?: string;
  freeSpins: number;
  multitap: number;
  tapLimitBoost: number;
  tappingGuruUses: number;
  profitPerHour: number;
  lastEarningsUpdate?: Date;
  lastSpinTime?: Date;
  lastCheckIn?: Date;
  checkInStreak: number;
  createdAt: Date;
  updatedAt: Date;
};

type UpdateData = Partial<UserData>;

const Roulette: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { user, setUser } = useUser();
  const [canSpin, setCanSpin] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [nextSpinTime, setNextSpinTime] = useState<Date | null>(null);
  const toast = useToast();

  // Your functions, hooks, and countdown logic

  return (
    <Box
      display="flex"
      flexDirection="column"
      bgGradient="linear-gradient(360deg, #00283A 0%, #12161E 88.17%)"
      width="100vw"
      minHeight="100vh"
      alignItems="center"
      textColor="white"
      overflow="hidden"
    >
      <Flex width="100%" height="100%" flexDirection="column" alignItems="center" justifyContent="center" pt={12} gap={{ base: 5, sm: 14 }} pb={32}>
        <Text color="#93BAFF" fontWeight="700" fontSize="24px">
          Resource Roulette
        </Text>
        
        <Box
          bg="linear-gradient(225deg, #FEDC31 16%, #FDC448 22.31%, #FC8682 35.67%, #FA2CD7 53.31%, #987CDB 70.57%, #33D0E0 87.83%)"
          mt={{ base: 0, sm: 14 }}
          display="flex"
          flexDirection="column"
          p={{ base: "4px", sm: "5px" }}
          borderRadius="50%"
        >
          <Box
            display="flex"
            flexDirection="column"
            bg="linear-gradient(225deg, #000604 16%, #303030 44.62%, #000604 87.83%)"
            p={{ base: "10px", sm: "20px" }}
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                textColors={["white"]}
                fontSize={32}
                backgroundColors={[
                  "#FE7A18",
                  "#FC9612",
                  "#1A95FF",
                  "#E60C6A",
                  "#6010F5",
                  "#00766B",
                  "#9D9D9D",
                  "#FE3E0E",
                ]}
                onStopSpinning={() => setMustSpin(false)}
              />
            </Suspense>
          </Box>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Roulette;
 */