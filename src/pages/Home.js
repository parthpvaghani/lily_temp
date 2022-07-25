import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Box style={{justifyContent:'center',alignItems:'center'}}>
       <Text>Welcome to</Text> <Image src='lilylearn_logo.png' alt='DSI Logo' width={100}
       style={{filter:'invert(100%)',display:'inline'}}
       alignSelf={'center'}
       /><Text>Portal</Text>
    </Box>
  )
}
