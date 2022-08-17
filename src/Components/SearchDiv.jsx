import { Flex, Input } from "@chakra-ui/react";
import {Location} from "../Assets/SVGs/Location"
export const SearchDiv = ()=>{
    return (
        <Flex h={'56px'} w='50%' backgroundColor='white' alignItems={'center'}>
          <Location/>
          <Input type={'text'} outline="transparent" border="transparent"/>
        </Flex>
    )
}