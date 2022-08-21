import { Flex } from "@chakra-ui/react";
import { Bottom } from "../Assets/SVGs/Bottom";
import { Browser } from "../Assets/SVGs/Browser";
import { Person_Buss } from "../Assets/SVGs/Person_Buss";
import { Uber_Buss_logo } from "../Assets/SVGs/Uber_Buss_log";
import { Uber_merchant_logo } from "../Assets/SVGs/Uber_merchant_logo";

export const MerchantNav = () => {
  return (
    <Flex
      direction={"row"}
      h="64px"
      bg="black"
      padding="0 10%"
      alignItems={"center"}
    >
      <Uber_merchant_logo/>
      
      <Flex ml={"auto"}>
          <Flex
            whiteSpace="nowrap"
            gap={"5px"}
            p="8px 12px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius="500px"
            bg={"Black"}
            color="white"
            cursor="pointer"
            h={"fit-content"}
            alignItems="center"
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
              transition: "background 0.2s cubic-bezier(0, 0, 1, 1) 0s",
            }}
          >
            <Browser/> En
          </Flex>
          <Flex
            whiteSpace="nowrap"
            gap={"5px"}
            p="8px 12px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius="500px"
            bg={"Black"}
            color="white"
            cursor="pointer"
            h={"fit-content"}
            alignItems="center"
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
              transition: "background 0.2s cubic-bezier(0, 0, 1, 1) 0s",
            }}
          >
           <Person_Buss/> Log in
          </Flex>
      </Flex>
    </Flex>
  );
};
