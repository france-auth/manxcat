import React from "react"
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { LevelList } from "../data";

const Shop = () => {
  return (
    <main className="apply_page-style px-5">
      <Box
      display={"flex"}
      flexDirection={"column"}
      py={2}
    >
      <Flex
        width={"full"}
        height={"100%"}
        flexDirection={"column"}
        pb={24}
        gap={5}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <Box
          width={"full"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"} 
          justifyContent={"center"}
          gap={5}
        >
          <Text fontSize={"25px"} fontWeight={700} color={"#000807"} className="font-bold">
            SHOP
          </Text>
          {LevelList.map(({video, price, points, level}, id) => {
            return (
              <Box
                border={"1px solid #000807"}
                bg={"#efd0ca"}
                className="w-full py-5 flex items-center justify-around rounded-2xl"
                key={id}
              >
                <div className="w-[25%] h-auto flex items-center justify-center">
                  <img 
                    src={video} 
                    alt="gif"
                    className="w-full h-auto bg-[#000807] rounded-2xl p-1"
                  />
                </div>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  className="gap-5 xx:w-[65%] xr:w-[60%]"
                >
                  <Flex className="flex justify-between items-center w-full">
                    <Text
                      fontSize={"18px"}
                      fontWeight={700}
                      color={"#000807"}
                    >
                      LEVEL {level} CAT
                    </Text>
                    <Text fontSize={"13px"} fontWeight={"500"}>
                      {points} / 3 hr
                    </Text>
                  </Flex>
                  <Button
                    borderRadius={"500px"}
                    border={"3px solid #000807"}
                    bg={"#efd0ca"}
                    textColor={"#000807"}
                  >
                    BUY - {price}
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
    </main>
  )
}

export default Shop