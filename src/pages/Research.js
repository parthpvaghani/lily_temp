import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Research() {
  return (
    <>
        <Box bg="#EBECF0" m={8} style={{flex:1}} height="265px" align="left">
            <Flex p="6">
            <SearchIcon w={6} h={6}/>
            <Text ml="3">
                Rechercher des mots
            </Text>
            </Flex>

            <Flex align={'center'} justify={'center'}>
            <Text fontSize={'xl'}>
                Résumé de la recherche
            </Text>
            </Flex>
    </Box>
    </>
  );
}
