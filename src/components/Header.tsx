import React from "react"
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function Header() {
  const { coinsEarned } = useUserContext();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      paddingX={"20px"}
      paddingTop={"16px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#EB8A90"}
        borderRadius={"50%"}
        p={"10px"}
        w={"80px"}
        className="cursor-pointer"
      >
        <Link to={"/level"} className="w-[100%]">
          <Image src="/sm-cat.png" />
        </Link>
      </Box>
      <Flex display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"end"} gap={2}>
        <Flex
          alignItems={"center"}
          gap={2}
          bg={"#EFD0CA"}
          borderRadius={"25px"}
          p={"10px 12px"}
        >
          <Image src="/coin.png" w={"15px"} />
          <Text fontSize={"13px"} color={"#000807"}>
            {coinsEarned.toFixed(3)}
          </Text>
          <Icon as={FaPlus} w={"15px"} color={"#000807"} />
        </Flex>
        <Flex alignItems={'center'} gap={2} h={'40px'} bg={'#EFD0CA'} borderRadius={'25px'} p={'0px 15px'}>
          <Image src="/levelcoin-homepage.png" w={'15px'}/>
          <Text fontSize={'12px'} color={"#000807"}>
              100
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
