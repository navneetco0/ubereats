import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react"
import { Navbar } from "../Components/Navbar"
import { feed } from "../data/feed"

export const Food = ()=>{
    const data = feed;
    console.log(data);
    return (
        <Box>
        <Navbar cart={'cart'}/>``
        <Flex w={"100%"} pt="70px" flexWrap={'wrap'}  margin={'auto'} justifyContent="center" gap="2%" >
          {data.map((element, index)=><Box key={index} mb="30px" cursor={"pointer"}>
            <Box h="150px" w="250px" overflow={'hidden'}>
             <Image src={element.store.image.items[1].url} alt="" h="150px" w="100%" />
            </Box>
            <Box padding={"5px"} >
              <Flex justifyContent={'space-between'} textOverflow="ellipsis">
                <Text w="calc(100% - 40px)" h="20px" overflow={"hidden"} textOverflow="ellipsis">{element.store.title.text}</Text>
                <Circle size={"30px"} bg="silver">
                   {element.store?.rating?.text}
                </Circle>
              </Flex> 
              <Flex>
                {element.store?.meta[0]?.text&&<Text>{element.store?.meta[0]?.text}</Text>}{element.store?.meta2[0]?.text&&<Text>• {element.store?.meta2[0]?.text}</Text>}
              </Flex>
            </Box>
          </Box>)}
        </Flex>
        </Box>
    )
}
