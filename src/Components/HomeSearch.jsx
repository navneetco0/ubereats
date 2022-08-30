import { Text, Flex, Button, Square } from "@chakra-ui/react";
import { Bottom } from "../Assets/SVGs/Bottom";
import { Timer } from "../Assets/SVGs/Timer";
import { SearchDiv } from "./SearchDiv";
import { useNavigate } from "react-router-dom"
export const HomeSearch = () => {
  const navigate = useNavigate();
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      minHeight="100vh"
      backgroundColor="#f9c810"
      backgroundImage={
        "uri(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/9b21aa66b4922ae2.png)"
      }
      justifyContent="center"
      p={"40px"}
    >
      <Text fontSize={"52px"} fontWeight="700" m={"40px 0"}>
        Order food to your door
      </Text>

      <Flex direction={"row"} gap="10px" w="70%">
        <SearchDiv />
        <Flex
          direction={"row"}
          gap={"10px"}
          alignItems="center"
          backgroundColor={"white"}
        >
          <Square w="48px" h={"48px"} cursor="pointer">
            <Timer />
          </Square>
          <Flex direction={"row"} alignItems={"center"} h="inherit" cursor={"pointer"}>
            <Text fontSize={'16px'} fontWeight="500"> Deliver now</Text>
            <Square w="48px" h="48px">
              <Bottom />
            </Square>
          </Flex>
        </Flex>
        <Button
          bg={"black"}
          color="white"
          fontSize="18px"
          fontWeight={"500"}
          padding="12px 16px"
          h="inherit"
          _hover={{
            bg: "#333333",
          }}
          onClick={()=>navigate('/food')}
        >
          {" "}
          Find Food{" "}
        </Button>
      </Flex>
      <Flex fontSize="14px" fontWeight="500" gap="5px" mt="20px">
        <Text textDecoration="underline" cursor="pointer" onClick={()=>navigate('/email')} >Sign In </Text> {" "}
        <Text> for your recent address</Text>
      </Flex>
    </Flex>
  );
};
