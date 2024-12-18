import React, { useState } from "react";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { useUserContext } from "../context/UserContext";
import IdModal from "./IdModal";

export default function Header() {
  const { coinsEarned, manxEarned } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    console.log("Modal opened");
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up to parent elements
    setIsOpen(false);
    console.log("Modal closed");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
      paddingX={"20px"}
      paddingTop={"12px"}
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
        onClick={handleOpen}
      >
        {isOpen && <IdModal isOpen={isOpen} isClosed={handleClose} />}
        <Box className="w-[100%]">
          <Image src="/sm-cat.png" />
        </Box>
      </Box>
      <Flex justifyContent={"center"} alignItems={"end"} gap={3}>
        <Flex
          alignItems={"center"}
          gap={2}
          bg={"#EFD0CA"}
          borderRadius={"25px"}
          p={"10px 12px"}
        >
          <Image src="/coin.png" w={"15px"} />
          <Text fontSize={"13px"} color={"#000807"}>
            {manxEarned.toLocaleString()}
          </Text>
          <Icon as={FaPlus} w={"15px"} color={"#000807"} />
        </Flex>
        <Flex
          alignItems={"center"}
          gap={2}
          h={"40px"}
          bg={"#EFD0CA"}
          borderRadius={"25px"}
          p={"0px 15px"}
        >
          <Image src="/levelcoin-homepage.png" w={"15px"} />
          <Text fontSize={"12px"} color={"#000807"}>
            {coinsEarned.toLocaleString()}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
