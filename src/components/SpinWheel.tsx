
import React, { useState, } from "react";
import { Box, Button, Flex, Text,  } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "MANX" },
  { option: "400" },
  { option: "USDT" },
  { option: "500" },
  {
    option: "",
    image: { uri: "/coin.png", offsetY: 180, sizeMultiplier: 0.5 },
  },
  { option: "600" },
  { option: "700" },
  { option: "800" },
];



export default function Spinwheel() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);




  const handleSpinClick = async () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }





  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      // bgGradient={"linear-gradient(360deg, #00283A 0%, #12161E 88.17%)"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflowY={"hidden"}
     
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={5}
        gap={{ base: 5, sm: 14 }}
        overflowY={"hidden"}
      >
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
            // border={"4px solid #F8F9FD"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              textColors={["black"]}
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
        >
          Spin and Win!
        </Button>

        <div className="flex flex-col items-center bg-[#EFD0CA80] w-full py-4 gap-2">
          <p className="text-xs font-medium">AVAILABLE SPIN</p>
          <p className="text-xl font-extrabold">01</p>
          <p className="text-xs font-medium">WATCH ADS TO GET MORE SPINS</p>
          <Button
            bgColor={"#EFD0CA"}
            border={"4px solid #000807"}
            borderRadius={"500px"}
            w={"60%"}
            h={"16px"}
            p={"15px 10px"}
            fontSize={"12px"}
            fontWeight={"800"}
          >
            PLAY NOW
          </Button>
          <p className="text-xs font-medium">4 of 5 videos watched</p>
        </div>
      </Flex>
    </Box>
  );
}
