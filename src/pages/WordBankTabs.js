import React, { useState } from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import WordBank from './WordBank';
import Research from './Research';

export default function WordBankTabs() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Tabs variant="soft-rounded" colorScheme="gray" w="100%">
      <Flex justify="center" wrap="wrap">
        <TabList>
          <Flex align="center" justify="center" wrap="wrap" m={3}>
            <Tab>Rechercher des mots </Tab>
            <Tab>Mes listes de mots </Tab>
            <Tab>Suggérer des mots </Tab>
            {/* <Tab>Pricing </Tab> */}
          </Flex>
        </TabList>
      </Flex>

      <TabPanels>
        <TabPanel>
            {
                activeStep === 1 ? <WordBank/> : <Research/>
            }
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
