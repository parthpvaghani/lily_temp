import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import LandingLayout from '../components/layouts/LandingLayout';
import { SearchIcon } from '@chakra-ui/icons'


export default function wordBank() {
  return (
    <LandingLayout>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Rechercher des mots </Tab>
          <Tab>Mes listes de mots </Tab>
          <Tab>Suggérer des mots </Tab>
          <Tab>Pricing </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box>
                <p>Niveaux :</p>
                <SearchIcon/>
                <p>Rechercher des mots </p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </LandingLayout>
  );
}
