import React from "react";
import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import { useFarm } from "../hooks/useFarm";
import { useUserContext } from "../context/UserContext";
import Loader from "../components/ui/Loader";
export default function Homepage() {
  const { isLoading: initializing, manxEarned } = useUserContext();
  const {
    isLoading,
    startFarming,
    claimRewards,
    ended,
    totalHrs,
    maxEarning,
    earned,
    farming,
  } = useFarm();

  if (initializing) return <Loader />;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgImage={"/background.png"}
      bgColor={"#EB8A90"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      minHeight={"100vh"}
      alignItems={"center"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        pb={24}
        gap={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Header />
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            className="w-full gap-4 justify-center items-center"
          >
            <Flex className="bg-[#EB8A90] w-screen justify-around flex items-center py-2 px-1">
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                display={"flex"}
                textAlign={"center"}
              >
                <Link
                  to={"/daily-signin"}
                  className="flex flex-col items-center gap-1"
                >
                  <Image src="/calendar.png" />
                  <Text fontWeight={"700"}>DAILY SIGNIN</Text>
                </Link>
              </Box>
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
              >
                <Link to={"/"} className="flex flex-col items-center gap-1">
                  <Image src="/warehouse.png" />
                  <Text fontWeight={"700"}>WAREHOUSE</Text>
                </Link>
              </Box>
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Link to={"/"} className="flex flex-col items-center gap-1">
                  <Image src="/calendar.png" />
                  <Text fontWeight={"700"}>AUTO</Text>
                </Link>
              </Box>
            </Flex>
            <Box className="flex flex-col justify-center items-center gap-2">
              <Box className="w-max flex items-center justify-center gap-1">
                <Image src="/coin.png" />
                <Text className="text-2xl font-bold">
                  {manxEarned.toLocaleString()}
                </Text>
              </Box>
              <Link to={"/levels"}>
                <Box className="flex justify-center items-center gap-1">
                  <Image src="/levelcat-homepage.png" w={"31px"} h={"32px"} />
                  <Text className="text-lg font-bold">Level 1</Text>
                </Box>
              </Link>
            </Box>
            <Flex
              flexDirection={"row"}
              display={"flex"}
              className="border-[10px] border-[#EB8A90]  bg-[#EFD0CA] rounded-full p-5 justify-center items-center w-64 h-auto z-40"
            >
              <Image src="/manx.png" className="w-full h-auto max-w-[97%]" />
            </Flex>
          </Box>
        </Box>
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          w={"100%"}
        >
          <Button
            mb={3}
            bgColor={"#EB8A90"}
            border={"3px solid #000807"}
            borderRadius={"500px"}
            w={"60%"}
            p={"16px 10px"}
            gap={4}
            fontSize={"12px"}
            fontWeight={"400"}
          >
            WATCH ADS
            <Image src="/play.png" />
          </Button>
          <Button
            bgColor={"#EB8A90"}
            border={"3px solid #000807"}
            borderRadius={"500px"}
            w={"90%"}
            p={"16px 24px"}
            gap={4}
            fontSize={"12px"}
            fontWeight={"400"}
            disabled={ended ? false : farming}
            onClick={ended ? claimRewards : startFarming}
          >
            {isLoading ? (
              <Spinner />
            ) : farming ? (
              ended ? (
                "Claim Rewards"
              ) : (
                "Farming..."
              )
            ) : (
              "Farm"
            )}
            {farming && (
              <>
                <Text>
                  {earned?.toFixed(3)} of {maxEarning}
                </Text>
                <Text>{totalHrs && totalHrs * 60}MIN</Text>
              </>
            )}
          </Button>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
