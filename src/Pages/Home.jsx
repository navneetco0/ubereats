import { Box } from "@chakra-ui/react";
import { HomeSearch } from "../Components/HomeSearch";
import { Navbar } from "../Components/Navbar";

export const Home = ()=>{
   
    return (
        <Box>
            <Navbar/>
            <HomeSearch/>
        </Box>
    )
}