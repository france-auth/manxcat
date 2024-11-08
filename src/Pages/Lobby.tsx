import React from "react"
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Lobby() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgImage={"/background.png"}
      bgColor={"#EFD0CA"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
      bgSize={"cover"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      py={2}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        pb={24}
        gap={5}
        alignItems={'center'}
        justifyContent={'center'}
        mt={5}
      >
        <Header />
        <Box width={'95%'}>
        <Flex width={'100%'} flexDirection={'column'} alignItems={'center'} gap={2}  justifyContent={'center'} mt={7}>
          <Text fontWeight={400} fontSize={"24px"} color={"#000807"}>
            CAT AND MOUSE
          </Text>
          <Text fontWeight={400} fontSize={"24px"} color={"#000807"}>
            GAME
          </Text>
          <Text fontSize={'15px'} fontWeight={700}>
            Welcome to the Game
          </Text>
        </Flex>
        
        <Flex gap={2} alignItems={'center'} justifyContent={'center'} mt={32}>
            <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'50%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'}>
                <Link to={'/stake'} className="w-[100%]">
                START GAME
                </Link>
            </Button>
            <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'40%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'}>
                <Link to={'/rules'} className="w-[100%]">
                RULES
                </Link>
            </Button>
        </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
