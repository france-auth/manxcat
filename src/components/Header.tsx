import {
    Box,
    Flex,
    Icon,
    Image,
    Text,
} from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <Box display={'flex'} gap={2} justifyContent={'space-between'} alignItems={'center'} width={'85%'}>
            <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            bgColor={'#EB8A90'} borderRadius={'50%'} p={'10px'} w={'80px'}>
                <Link to={'/level'} className="w-[100%]">
                <Image src="/sm-cat.png"/>
                </Link>
            </Box>
        <Flex gap={2}>
            <Flex alignItems={'center'} gap={2} h={'40px'} bg={'#EFD0CA'} borderRadius={'25px'} p={'0px 10px'}>
                <Image src="/coin.png" w={'15px'}/>
                <Text fontSize={'12px'} color={"#000807"}>
                    45,000
                </Text>
                <Icon as={FaPlus} w={'15px'} color={'#000807'}/>
            </Flex>
            <Flex alignItems={'center'} gap={2} h={'40px'} bg={'#EFD0CA'} borderRadius={'25px'} p={'0px 15px'}>
                <Image src="/coin.png" w={'15px'}/>
                <Text fontSize={'12px'} color={"#000807"}>
                    45,000
                </Text>
                <Icon as={FaPlus} w={'15px'} color={'#000807'}/>
            </Flex>

        </Flex>

        </Box>

    )
}