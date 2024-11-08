import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { LevelList } from "../data";

export default function CatLevel() {
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
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
      >
        <Box
          width={"95%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Text fontSize={"24px"} fontWeight={400} color={"#000807"}>
            CAT LEVEL INFORMATION
          </Text>
          {LevelList.map((level) => {
            return (
              <Box
                border={"3px solid #000807"}
                height={"128px"}
                w={"95%"}
                bg={"#efd0ca"}
                borderRadius={"20px"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <video 
                  src={level.video} 
                  className="w-full h-auto block z-50"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  >
                    Your Browser doesnt support.
                </video>
                <Box
                  w={{base:"70%", sm:"244px"}}
                  h={"128px"}
                  display={"flex"}
                  flexDirection={"column"}
                  p={"15px"}
                  justifyContent={"space-between"}
                >
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Text
                      fontSize={"20px"}
                      fontWeight={400}
                      letterSpacing={{base:"0px",sm:"1px"}}
                      color={"#000807"}
                    >
                      LEVEL {level.level} CAT
                    </Text>
                    <Text fontSize={"15px"} fontWeight={"700"}>
                      {level.points} / 3 hr
                    </Text>
                  </Flex>
                  <Button
                    w={{base:"98%", sm: "224px"}}
                    height={"48px"}
                    borderRadius={"500px"}
                    border={"5px solid #000807"}
                    bg={"#efd0ca"}
                    textColor={"#000807"}
                    p={"15px 10px"}
                  >
                    BUY
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
}
