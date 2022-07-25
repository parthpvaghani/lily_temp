import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
       <Image src='lilylearn_logo.png' alt='DSI Logo' width={100}
       style={{filter:'invert(100%)'}}
       />
    </Box>
  );
}
