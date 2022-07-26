import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
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
  ButtonGroup,
} from '@chakra-ui/react';
import { SearchIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

export default function WordBank() {
  const navigate = useNavigate();

  return (
        <>
          <Flex align="center" wrap="wrap">
            <Box style={{ flex: 1 }}>
              <SearchIcon mr={4} />
              <span style={{ fontWeight: 'bold', fontSize: '24px' }}>
                Rechercher des mots
              </span>
            </Box>
          </Flex>

          <Flex align="center" justify="space-around" wrap="wrap" mt="3">
            <RadioGroup defaultValue="1" mt={2}>
              <SimpleGrid columns={{ sm: 1, md: 6 }} spacing={5}>
                <Text alignSelf={'center'}>Niveaux: </Text>

                <Radio value="1" borderColor={'gray.400'} size="md">
                  <Text fontSize={'sm'}>
                    Niveau découverte{' '}
                    <Text fontWeight={'bold'}>"Graine de lecteur" </Text>
                  </Text>
                </Radio>
                <Radio value="2" borderColor={'gray.400'}>
                  <Text fontSize={'sm'}>
                    Niveau débutant{' '}
                    <Text fontWeight={'bold'}>"Pousse de lecteur" </Text>
                  </Text>
                </Radio>
                <Radio value="3" borderColor={'gray.400'}>
                  <Text fontSize={'sm'}>
                    Niveau intermédiaire{' '}
                    <Text fontWeight={'bold'}>"Lecteur en herbe" </Text>
                  </Text>
                </Radio>
                <Radio value="4" borderColor={'gray.400'}>
                  <Text fontSize={'sm'}>
                    Niveau avance{' '}
                    <Text fontWeight={'bold'}>"Lecteur en fieur" </Text>
                  </Text>
                </Radio>
                <Flex flexDirection="column" alignItems="center">
                  <QuestionOutlineIcon mb={2} />
                  <Link
                    to={''}
                    style={{
                      color: '#3BB9FF',
                      textDecorationLine: 'underline',
                      fontSize: '15px',
                    }}
                  >
                    Consulter la charte pédagogique
                  </Link>
                </Flex>
              </SimpleGrid>
            </RadioGroup>
          </Flex>

          <Text mt={8} mb={2} fontSize="md">
            Critères :{' '}
          </Text>

          <SimpleGrid columns={{ sm: 1, md: 3, lg: 3 }} spacing={45} mx={10}>
            <Box h="auto" w={'100%'}>
              <Box minH="45px" bg="#EBECF0" pt="8px">
                Phonétiques
              </Box>

              <Box textAlign="left" fontSize="sm">
                <Text mt={4}>Son d'attaque: </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <Text mt={4}>Avec le(s) son(s): </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <Text mt={4}>Sans le(s) son(S): </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <Text mt={4}>Rime avec: </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <Select
                  placeholder="Nombre de syllabes phonétiques"
                  borderColor={'gray.400'}
                  mt={7}
                  fontSize="sm"
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

              <Box textAlign="left" fontSize="sm">
                <Text mt={4}>Commence par la/les lettre(s): </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <HStack spacing={'4'}>
                  <Flex flexDirection={'column'}>
                    <Text mt={4}>Avec la/les lettre(s): </Text>
                    <Input borderColor={'gray.400'} mt={2} fontSize="sm" />
                  </Flex>
                  <Flex flexDirection={'column'}>
                    <Text mt={4}>Sans la/les lettre(s): </Text>
                    <Input borderColor={'gray.400'} mt={2} fontSize="sm" />
                  </Flex>
                </HStack>

                <HStack spacing={'4'}>
                  <Flex flexDirection={'column'}>
                    <Text mt={4}>Avec la suite de lettres: </Text>
                    <Input borderColor={'gray.400'} mt={2} fontSize="sm" />
                  </Flex>
                  <Flex flexDirection={'column'}>
                    <Text mt={4}>Sans la suite de lettres: </Text>
                    <Input borderColor={'gray.400'} mt={2} fontSize="sm" />
                  </Flex>
                </HStack>

                <Text mt={4}>Se termine par la/les lettre(s): </Text>
                <Input borderColor={'gray.400'} mt={2} fontSize="sm" />

                <Select
                  placeholder="Nombre de syllabes orthographiques"
                  borderColor={'gray.400'}
                  mt={7}
                  fontSize="sm"
                >
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                </Select>
              </Box>
            </Box>
            <Box h="auto" w={'100%'}>
              <Box minH="45px" bg="#EBECF0" pt="8px">
                Sémantiques & grammaticaux
              </Box>

              <Box textAlign="left" fontSize="sm">
                <Text mt={5}>Nature de mots </Text>
                <ButtonGroup gap="4" mt={1} w={'100%'}>
                  <Button
                    backgroundColor={'gray.600'}
                    color={'white'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Nom commun
                  </Button>
                  <Button
                    backgroundColor={'white'}
                    color={'gray.600'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Autre
                  </Button>
                </ButtonGroup>

                <Text mt={6}>Genre </Text>
                <ButtonGroup gap="4" mt={1} w={'100%'}>
                  <Button
                    backgroundColor={'white'}
                    color={'gray.600'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Masculin
                  </Button>
                  <Button
                    backgroundColor={'white'}
                    color={'gray.600'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Féminin
                  </Button>
                </ButtonGroup>

                <Text mt={6}>Nombre </Text>
                <ButtonGroup gap="4" mt={1} w={'100%'}>
                  <Button
                    backgroundColor={'white'}
                    color={'gray.600'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Singulier
                  </Button>
                  <Button
                    backgroundColor={'white'}
                    color={'gray.600'}
                    border="2px"
                    minW={'125px'}
                    fontSize="sm"
                  >
                    Pluriel
                  </Button>
                </ButtonGroup>

                <Text mt="8">Thème(s)</Text>
                <Text mt="6" fontSize={'lg'} pl="10">
                  pas de thèmes pour le moment à intégrer plus tard
                </Text>
              </Box>
            </Box>
          </SimpleGrid>

          <Text mt={12} fontSize="md">
            Forme du mot (Consonnes/Voyelles):
          </Text>
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
              minW={'85px'}
              mx={4}
            >
              C
            </Button>
            <Button
              backgroundColor={'gray.600'}
              color={'white'}
              size="xs"
              minW={'85px'}
            >
              V
            </Button>
          </Box>

          <Flex justifyContent={'center'}>
            <Select
              placeholder="Nombre de lettres"
              borderColor={'gray.400'}
              mt={5}
              w="290px"
              fontSize="sm"
            >
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
            </Select>
          </Flex>

          <Button
            backgroundColor={'gray.600'}
            color={'white'}
            mt={7}
            mb={10}
            onClick={() => navigate('/research')}
          >
            Rechercher
          </Button>
       </>
  );
}
