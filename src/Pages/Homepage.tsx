import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
export default function Homepage() {
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
        alignItems={'center'}
        justifyContent={'center'}
        mt={5}
      >
        <Header />
        <Box width={'95%'}>
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
              <Text>ABOUT</Text>
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
                <Link to={'/lobby'}>
              <Image src="/console.png" />
              <Text>GAME</Text>
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
              <Image src="/console.png" />
              <Text>SPIN</Text>
            </Box>
          </Flex>
          <Flex width={"340px"} h={"300px"} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} position={'relative'}>
            <Image
              src="/manx.png"
              w={"100%"}
              position={'absolute'}
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
              <Image src="/calendar.png" />
              <Text>DAILY SIGNIN</Text>
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
              <Text>WAREHOUSE</Text>
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
              <Text>AUTO</Text>
            </Box>
          </Flex>
        </Box>
        </Box>
        <Box bgColor={'#EFD0CA80'} alignItems={'center'} display={'flex'}
        flexDirection={'column'} w={'100%'} >
            <Text fontSize={'16px'} fontWeight={700}>
                AVAILABLE tickets
            </Text>
            <Text mb={2} fontSize={'20px'} fontWeight={400} 
            lineHeight={'32.9px'}
            >
                01
            </Text>
            <Button mb={3} bgColor={'#EFD0CA'} border={'5px solid #000807'} borderRadius={'500px'} w={'60%'} h={'36px'} p={'15px 10px'} gap={4} fontSize={'12px'} fontWeight={'400'}>
                PLAY NOW 
                <Image src="/play.png"/>
            </Button>
            <Button bgColor={'#EFD0CA'} border={'5px solid #000807'} borderRadius={'500px'} w={'90%'} h={'52px'} p={'15px 24px'} gap={4} fontSize={'12px'} fontWeight={'400'}>
                FARMING 
                <Text>
                0.02 of 127 
                </Text>
                <Text>180MIN</Text>
            </Button>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
