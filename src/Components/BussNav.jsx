import { Flex } from "@chakra-ui/react";
import { Bottom } from "../Assets/SVGs/Bottom";
import { Browser } from "../Assets/SVGs/Browser";
import { Person_Buss } from "../Assets/SVGs/Person_Buss";
import { Uber_Buss_logo } from "../Assets/SVGs/Uber_Buss_log";

export const BussNav = () => {
  const bot_data = [
    "How it works",
    "Solutions",
    "Industries and teams",
    "Resources",
  ];
  const ri_but_data = [
    { icon: <Browser />, text: "En" },
    { text: "Contct us" },
    { icon: <Person_Buss />, text: "Log in" },
  ];
  return (
    <Flex
      direction={"row"}
      h="64px"
      bg="black"
      padding="0 10%"
      alignItems={"center"}
    >
      <Uber_Buss_logo />
      <Flex direction={"row"} gap="10px">
        {bot_data.map((element, index) => (
          <Flex
            key={index}
            whiteSpace="nowrap"
            gap={"5px"}
            p="8px 12px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius="500px"
            bg={"Black"}
            color="white"
            cursor="pointer"
            h={"fit-content"}
            _hover={{
              bg: "rgba(255, 255, 255, 0.2)",
              transition: "background 0.2s cubic-bezier(0, 0, 1, 1) 0s",
            }}
          >
            {element} <Bottom color="white" />
          </Flex>
        ))}
      </Flex>
      <Flex ml={"auto"}>
        {ri_but_data.map((element, index) => (
          <Flex
            key={index}
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
            {element.icon} {element.text}
          </Flex>
        ))}
      </Flex>
      <Flex
            whiteSpace="nowrap"
            gap={"5px"}
            p="8px 12px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius="500px"
            bg={"white"}
            cursor="pointer"
            h={"fit-content"}
            alignItems="center"
            _hover={{
              bg: "#E2E2E2",
              transition: "background 0.2s cubic-bezier(0, 0, 1, 1) 0s",
            }}
          >
            Get Started
          </Flex>
      
    </Flex>
  );
};
