import { Box, Text } from "@chakra-ui/react";
import { createRef, useEffect, useState } from "react";
import { HomeBody } from "../Components/HomeBody";
import { HomeSearch } from "../Components/HomeSearch";
import { Navbar } from "../Components/Navbar";

export const Home = ()=>{
    const myRef = createRef();
    const [navStatus, setNavStatus] = useState(null);
    const onScroll = ()=>{
         const scrollY = window.scrollY;
         const scrollTop = myRef.current.scrollTop;
         console.log(scrollTop, scrollY);
    }
    return (
        <Box id="home" ref={myRef} onScroll={onScroll} >
            <Navbar/>
            <HomeSearch/>
            <HomeBody/>
            <Text>{navStatus&&navStatus}</Text>
        </Box>
    )
}