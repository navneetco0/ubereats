import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Logo } from "../Assets/SVGs/Logo";
import { Menu } from "../Assets/SVGs/Menu";
import { Person } from "../Assets/SVGs/Person";
export const Navbar = ()=>{
    return (
        <Flex p={"0 40px"} height="96px" alignItems={"center"} position="fixed" width={"100%"}>
            <Box mr={"2.5%"}><Menu/></Box>
            <Box><Logo/></Box>
            <Spacer/>
            <Flex gap={'20px'} fontSize="16px" fontWeight={"500"} h="fit-content">
                <Flex whiteSpace="nowrap" gap={"5px"} p="12px 16px" boxShadow= "0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)" borderRadius="500px"><Person whiteSpace="nowrap"/> Log in</Flex>
                <Flex whiteSpace={"nowrap"} p="12px 16px" boxShadow= "0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%)" borderRadius={"500px"} backgroundColor="#000000" color="white">Sign Up</Flex>
            </Flex>
        </Flex>
    )
}