import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { SearchDiv } from "./SearchDiv";

export const HomeSearch = ()=>{
    return (
        <Flex direction={"column"} w={'100%'} h='100vh' backgroundColor="#f9c810" backgroundImage={"uri(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/9b21aa66b4922ae2.png)"} justifyContent="center" p={'40px'}>
             <Text fontSize={"52px"} fontWeight="700" m={"40px 0"}>Order food to your door</Text>
            
             <Flex >
               <SearchDiv/>
               <Button/>
               <Button bg={"black"} color="white" fontSize="18px" fontWeight={"500"} padding="12px 16px" _hover={{
                bg:"#333333"
               }}> Find Food </Button>
             </Flex>
             <Flex><Text>Sign In</Text><Text>for your recent address</Text></Flex>
        </Flex>
    )
}