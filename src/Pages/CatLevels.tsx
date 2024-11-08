import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const LevelList = [
  {
    image: "/cats/cat1.png",
    level: "1",
    points: "10",
  },
  {
    image: "/cats/cat2.png",
    level: "2",
    points: "20",
  },
  {
    image: "/cats/cat3.png",
    level: "3",
    points: "30",
  },
  {
    image: "/cats/cat4.png",
    level: "4",
    points: "40",
  },
  {
    image: "/cats/cat5.png",
    level: "5",
    points: "50",
  },
  {
    image: "/cats/cat6.png",
    level: "6",
    points: "60",
  },
  {
    image: "/cats/cat7.png",
    level: "7",
    points: "80",
  },
  {
    image: "/cats/cat8.png",
    level: "8",
    points: "100",
  },
  {
    image: "/cats/cat9.png",
    level: "9",
    points: "120",
  },
  {
    image: "/cats/cat10.png",
    level: "10",
    points: "140",
  },
  {
    image: "/cats/cat11.png",
    level: "11",
    points: "160",
  },
  {
    image: "/cats/cat12.png",
    level: "12",
    points: "180",
  },
  {
    image: "/cats/cat13.png",
    level: "13",
    points: "200",
  },
  {
    image: "/cats/cat14.png",
    level: "14",
    points: "220",
  },
  {
    image: "/cats/cat15.png",
    level: "15",
    points: "240",
  },
  {
    image: "/cats/cat16.png",
    level: "16",
    points: "260",
  },
  {
    image: "/cats/cat17.png",
    level: "17",
    points: "280",
  },
  {
    image: "/cats/cat18.png",
    level: "18",
    points: "300",
  },
  {
    image: "/cats/cat19.png",
    level: "19",
    points: "320",
  },
  {
    image: "/cats/cat20.png",
    level: "20",
    points: "340",
  },
  {
    image: "/cats/cat21.png",
    level: "21",
    points: "360",
  },
  {
    image: "/cats/cat22.png",
    level: "22",
    points: "380",
  },
  {
    image: "/cats/cat23.png",
    level: "23",
    points: "400",
  },
  {
    image: "/cats/cat24.png",
    level: "24",
    points: "420",
  },
  {
    image: "/cats/cat25.png",
    level: "25",
    points: "440",
  },
  {
    image: "/cats/cat26.png",
    level: "26",
    points: "460",
  },
  {
    image: "/cats/cat27.png",
    level: "27",
    points: "480",
  },
  {
    image: "/cats/cat28.png",
    level: "28",
    points: "500",
  },
  {
    image: "/cats/cat29.png",
    level: "29",
    points: "520",
  },
  {
    image: "/cats/cat30.png",
    level: "30",
    points: "540",
  },
  {
    image: "/cats/cat31.png",
    level: "31",
    points: "560",
  },
  {
    image: "/cats/cat32.png",
    level: "32",
    points: "580",
  },
  {
    image: "/cats/cat33.png",
    level: "33",
    points: "600",
  },
  {
    image: "/cats/cat34.png",
    level: "34",
    points: "620",
  },
  {
    image: "/cats/cat35.png",
    level: "35",
    points: "640",
  },
  {
    image: "/cats/cat36.png",
    level: "36",
    points: "660",
  },
  {
    image: "/cats/cat37.png",
    level: "37",
    points: "680",
  },
  {
    image: "/cats/cat38.png",
    level: "38",
    points: "700",
  },
  {
    image: "/cats/cat39.png",
    level: "39",
    points: "720",
  },
  {
    image: "/cats/cat40.png",
    level: "40",
    points: "740",
  },
  {
    image: "/cats/cat41.png",
    level: "41",
    points: "760",
  },
  {
    image: "/cats/cat42.png",
    level: "42",
    points: "780",
  },
  {
    image: "/cats/cat43.png",
    level: "43",
    points: "800",
  },
  {
    image: "/cats/cat44.png",
    level: "44",
    points: "820",
  },
  {
    image: "/cats/cat45.png",
    level: "45",
    points: "840",
  },
  {
    image: "/cats/cat46.png",
    level: "46",
    points: "860",
  },
  {
    image: "/cats/cat47.png",
    level: "47",
    points: "880",
  },
  {
    image: "/cats/cat48.png",
    level: "48",
    points: "900",
  },
];

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
                <Image src={level.image} w={'25%'}/>
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
