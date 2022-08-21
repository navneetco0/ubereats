import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {Location} from "../Assets/SVGs/Location"
export const SearchDiv = ()=>{
    const [focus, setFocus] = useState(false);
    return (
        <Flex h={'56px'} w='50%' backgroundColor='white' alignItems={'center'} padding="8px 16px" gap="10px" boxShadow={focus?"inset 0 -2px 0 black":""}>
          <Location/>
          <input type="text" style={{border:'transparent', backgroundColor:'transparent', outline:"transparent", flexGrow:1}} placeholder="Enter delivery address" onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}/>
        </Flex>
    )
}