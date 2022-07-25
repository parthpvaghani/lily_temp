import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
       <Image src='LOGO-DSI-Horizontal.png' alt='DSI Logo' width={200}
       />
    </Box>
  );
}
