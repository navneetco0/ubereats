import { Flex, Box, Spacer, Text, Image } from "@chakra-ui/react";
import { Logo } from "../Assets/SVGs/Logo";
import { Menu } from "../Assets/SVGs/Menu";
import { Person } from "../Assets/SVGs/Person";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();
  return (
    <>
      <Flex
        p={"0 40px"}
        height="96px"
        alignItems={"center"}
        position="fixed"
        width={"100%"}
      >
        <Box mr={"2.5%"} cursor={"pointer"} onClick={onOpen} >
          <Menu />
        </Box>
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Flex gap={"20px"} fontSize="16px" fontWeight={"500"} h="fit-content">
          <Flex
            whiteSpace="nowrap"
            gap={"5px"}
            p="12px 16px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius="500px"
          >
            <Person whiteSpace="nowrap" /> Log in
          </Flex>
          <Flex
            whiteSpace={"nowrap"}
            p="12px 16px"
            boxShadow="0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)"
            borderRadius={"500px"}
            backgroundColor="#000000"
            color="white"
          >
            Sign Up
          </Flex>
        </Flex>
      </Flex>
      <Drawer
      size={'xs'}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>

          <DrawerBody>
            <Box bg="black" color={'white'} textAlign="center" padding={'12px 16px'} fontSize='18px' fontWeight={'500'} borderRadius={'8px'} mt="20px">Sign up</Box>
            <Box bg="#EEEEEE" color={'Black'} textAlign="center" padding={'12px 16px'} fontSize='18px' fontWeight={'500'} borderRadius={'8px'} mt="10px">Log in</Box>
            <Text>Create a business account</Text>
            <Text>Add your restaurant</Text>
            <Text>sign up to deliver</Text>
          </DrawerBody>
          <DrawerFooter>
            <Flex gap={'20px'}>
                <Image w={'56px'} h="56px" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg" alt="" />
                <Text fontSize="16px" fontWeight={'500'}>There's more to love in the app</Text>
            </Flex>
            <Flex>
               <Box></Box>
               <Box></Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};


