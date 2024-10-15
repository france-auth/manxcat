import { Box, Button, Flex, Image, Text, Input } from "@chakra-ui/react";
import Header from "../components/Header";
// import { Link } from "react-router-dom";
export default function PlaceBet() {
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
        <Box width={'95%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
        <Flex width={'100%'} flexDirection={'column'} alignItems={'center'} gap={2}  justifyContent={'center'} mt={7}>
          <Text fontWeight={400} fontSize={"24px"} color={"#000807"}>
            CAT AND MOUSE
          </Text>
          <Text fontWeight={400} fontSize={"24px"} color={"#000807"}>
            GAME
          </Text>
          <Text fontSize={'15px'} fontWeight={700}>
            Place your Bets
          </Text>
        </Flex>
        <Box
        width={'85%'}
        display={'grid'}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap={'5px'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={10}>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>
            <Image src="/mysteryCard.png"/>

        </Box>
        
        <Flex gap={2} alignItems={'center'} justifyContent={'center'} mt={14} width={'100%'}>
            {/* <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'50%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'}>
                START GAME
            </Button> */}
            <Input type="number" placeholder="Enter Amount (>= 10MANX)" border={'2.5px solid #000807'} borderRadius={'500px'} height={'52px'} fontSize={'12px'} bgColor={'white'} color={'#000807'} textAlign={'center'}/>
            <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'40%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'}>
              CONFIRM BET
            </Button>
        </Flex>
        <Flex gap={2} alignItems={'center'} justifyContent={'center'} mt={10} width={'100%'}>
            {/* <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'50%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'}>
                START GAME
            </Button> */}
            
            <Button bgColor={'#Eb8a90'} border={'2.5px solid #000807'} borderRadius={'500px'} w={'100%'} h={'52px'} p={'15px 59.5px'}  fontSize={'12px'} fontWeight={'400'} color={'#000807'} gap={2}>
              Current Balance: <Text fontWeight={700}> 100 MANX</Text>
            </Button>
        </Flex>

        </Box>
      </Flex>
    </Box>
  );
}
