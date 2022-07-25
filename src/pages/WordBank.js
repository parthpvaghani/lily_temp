import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Flex,
  RadioGroup,
  Radio,
  HStack,
  Text,
  Input,
  Select,
  PinInput,
  PinInputField,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { SearchIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

export default function WordBank() {
  return (
    <Tabs variant="soft-rounded" colorScheme="gray" w="100%">
      <Flex justify="center" wrap="wrap">
        <TabList>
        <Flex
        align="center"
        justify="center"
        wrap="wrap"
        m={3}
        >
            <Tab>Rechercher des mots </Tab>
            <Tab>Mes listes de mots </Tab>
            <Tab>Suggérer des mots </Tab>
            <Tab>Pricing </Tab>
          </Flex>
        </TabList>
      </Flex>

      <TabPanels>
        <TabPanel>
          <Flex align="center" wrap="wrap">
            <Box style={{ flex: 1 }}>
              <SearchIcon mr={4} />
              <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                Rechercher des mots
              </span>
            </Box>
          </Flex>

          <Flex align="center" justify="space-around" wrap="wrap" mt="3">
            <RadioGroup defaultValue="1" mt={4}>
            <SimpleGrid columns={{sm:1,md:6}} spacing={5}>
                <Text alignSelf={'center'}>Niveaux:</Text>
                <Radio value="1">Radio 1</Radio>
                <Radio value="2">Radio 2</Radio>
                <Radio value="3">Radio 3</Radio>
                <Radio value="4">Radio 4</Radio>
                <Flex flexDirection="column" alignItems="center">
                  <QuestionOutlineIcon />
                  <Link
                    to={''}
                    style={{
                      color: '#3BB9FF',
                      textDecorationLine: 'underline',
                    }}
                  >
                    Consulter la charte pédagogique
                  </Link>
                </Flex>
              </SimpleGrid>
            </RadioGroup>
          </Flex>

          <Text mt={8}>Critères : </Text>


            <SimpleGrid columns={{sm:1,md:3,lg:3}} spacing={25} mx={10}>
            <Box h="auto" w={'100%'}>
              <Box minH="45px" bg="#EBECF0" pt="8px">
                Phonétiques
              </Box>

              <Box textAlign="left">
                <Text mt={4}>Son d'attaque: </Text>
                <Input borderColor={'gray.400'} mt={2} />

                <Text mt={4}>Avec le(s) son(s): </Text>
                <Input borderColor={'gray.400'} mt={2} />

                <Text mt={4}>Sans le(s) son(S): </Text>
                <Input borderColor={'gray.400'} mt={2} />

                <Text mt={4}>Rime avec: </Text>
                <Input borderColor={'gray.400'} mt={2} />

                <Select
                  placeholder="Nombre de syllabes phonétiques"
                  borderColor={'gray.400'}
                  mt={7}
                >
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                </Select>
              </Box>
            </Box>
            <Box h="auto" w={'100%'}>
              <Box minH="45px" bg="#EBECF0" pt="8px">
                Orthographiques
              </Box>
            </Box>
            <Box h="auto" w={'100%'}>
              <Box minH="45px" bg="#EBECF0" pt="8px">
                Sémantiques & grammaticaux
              </Box>
            </Box>
            </SimpleGrid>

          <Text mt={12}>Forme du mot (Consonnes/Voyelles):</Text>
          <Flex justifyContent={'center'} mt={3}>
            <HStack>
              <PinInput type="alphanumeric" otp>
                <PinInputField borderColor={'gray.400'} />
                <PinInputField borderColor={'gray.400'} />
                <PinInputField borderColor={'gray.400'} />
                <PinInputField borderColor={'gray.400'} />
                <PinInputField borderColor={'gray.400'} />
                <PinInputField borderColor={'gray.400'} />
              </PinInput>
            </HStack>
          </Flex>

          <Box mt={4}>
            <Button
              backgroundColor={'gray.600'}
              color={'white'}
              size="xs"
              width={'7%'}
              mx={4}
            >
              C
            </Button>
            <Button
              backgroundColor={'gray.600'}
              color={'white'}
              size="xs"
              width={'7%'}
            >
              V
            </Button>
          </Box>

          <Flex justifyContent={'center'}>
            <Select
              placeholder="Nombre de lettres"
              borderColor={'gray.400'}
              mt={5}
              width={'30%'}
            >
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
            </Select>
          </Flex>

          <Button backgroundColor={'gray.600'} color={'white'} mt={7} mb={10}>
            Rechercher
          </Button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
