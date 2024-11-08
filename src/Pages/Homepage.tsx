import React from "react"
import { Box, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import { useFarm } from "../hooks/useFarm";
import { useUserContext } from "../context/UserContext";
import Loader from "../components/ui/Loader";
export default function Homepage() {
  const { isLoading: initializing } = useUserContext();
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
      py={2}
      px={2}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        pb={24}
        gap={5}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <Header />
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box display={"flex"} alignItems={"center"} mt={6}>
            <Flex
              gap={"60px"}
              flexDirection={"column"}
              w={"50px"}
              height={"314px"}
              zIndex={10}
            >
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
              >
                <Image src="/info.png" />
                <Text fontWeight={"700"}>ABOUT</Text>
              </Box>
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
              >
                <Link to={"/lobby"} className="flex flex-col items-center">
                  <Image src="/console.png" />
                  <Text fontWeight={"700"}>GAME</Text>
                </Link>
              </Box>
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
              >
                <Link to={"/spin"} className="flex flex-col items-center">
                  <Image src="/console.png" />
                  <Text fontWeight={"700"}>SPIN</Text>
                </Link>
              </Box>
            </Flex>
            <Flex
              width={"240px"}
              h={"300px"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              position={"relative"}
            >
              <Image
                src="/manx.png"
                w={"95%"}
                maxW={"97%"}
                position={"absolute"}
                top={5}
              />
            </Flex>
            <Flex
              gap={"60px"}
              flexDirection={"column"}
              w={"50px"}
              height={"314px"}
              zIndex={10}
            >
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
                textAlign={"center"}
              >
                <Link
                  to={"/daily-signin"}
                  className="flex flex-col items-center"
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
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
              >
                <Image src="/warehouse.png" />
                <Text fontWeight={"700"}>WAREHOUSE</Text>
              </Box>
              <Box
                color={"#000807"}
                fontWeight={400}
                fontSize={"10px"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                w={"49px"}
                h={"65px"}
                gap={"2px"}
                py={"5px"}
              >
                <Image src="/calendar.png" />
                <Text fontWeight={"700"}>AUTO</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box
          bgColor={"#EFD0CA80"}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          w={"100%"}
        >
          <Text fontSize={"16px"} fontWeight={700}>
            AVAILABLE tickets
          </Text>
          <Text mb={2} fontSize={"20px"} fontWeight={400} lineHeight={"32.9px"}>
            01
          </Text>
          <Button
            mb={3}
            bgColor={"#EFD0CA"}
            border={"4px solid #000807"}
            borderRadius={"500px"}
            w={"60%"}
            h={"36px"}
            p={"16px 10px"}
            gap={4}
            fontSize={"12px"}
            fontWeight={"400"}
          >
            PLAY NOW
            <Image src="/play.png" />
          </Button>
          <Button
            bgColor={"#EFD0CA"}
            border={"5px solid #000807"}
            borderRadius={"500px"}
            w={"90%"}
            h={"52px"}
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
                "claim rewards"
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
