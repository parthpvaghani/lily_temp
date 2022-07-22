import React from 'react';
import { Link } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Flex,
  RadioGroup,
  Stack,
  Radio,
} from '@chakra-ui/react';
import LandingLayout from '../components/layouts/LandingLayout';
import { SearchIcon } from '@chakra-ui/icons'


export default function wordBank() {
  return (
    <LandingLayout>
      <Tabs variant="soft-rounded" colorScheme="blue" w="100%">
        <Flex
            as="Box"
            justify="center"
            wrap="wrap"
        >
            <TabList>
            <Tab>Rechercher des mots </Tab>
            <Tab>Mes listes de mots </Tab>
            <Tab>Suggérer des mots </Tab>
            <Tab>Pricing </Tab>
            </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Flex
                as="Box"
                align="center"
                wrap="wrap"
            >
                <p>Niveaux :</p>
                <Box style={{flex:1}}>
                    <SearchIcon mr={4}/>
                    <span style={{fontWeight:'bold', fontSize:'24px'}}>Rechercher des mots </span>
                </Box>
            </Flex>

            <Flex
                as="Box"
                align="center"
                justify='space-around'
                wrap="wrap"
                mt="3"
            >
                <RadioGroup defaultValue='1' mt={4}>
                    <Stack spacing={4} direction='row'>
                        <Radio value='1'>Radio 1</Radio>
                        <Radio value='2'>Radio 2</Radio>
                        <Radio value='3'>Radio 3</Radio>
                        <Radio value='4'>Radio 4</Radio>
                        <Link to={''} style={{color:'#3BB9FF', textDecorationLine:'underline'}}>Consulter la charte pédagogique </Link>
                    </Stack>
                </RadioGroup>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </LandingLayout>
  );
}
