import { Flex } from "@chakra-ui/react"
import { Uber_logo } from "../Assets/SVGs/Uber_logo"

export const AuthNav = ()=>{
    return (
        <Flex direction={"row"} h="64px" bg="black" paddingLeft="64px" alignItems={"center"}>
            <Uber_logo/>
        </Flex>
    )
}