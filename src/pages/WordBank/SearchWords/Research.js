import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Icon,
  Select,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { BsBox } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Research() {
  const data = [
    {
      word: 'Abeille',
      frequency: 'Élevée',
      inPack: 'Insectes',
      add: '+',
    },
    {
      word: 'Arbre',
      frequency: 'Élevée',
      inPack: '',
      add: '+',
    },
    {
      word: 'Balustrade',
      frequency: 'Faible',
      inPack: '',
      add: '+',
    },
    {
      word: 'Brique',
      frequency: 'Moyenne',
      inPack: '',
      add: '+',
    },
    {
      word: 'Mur',
      frequency: 'Élevée',
      inPack: 'Pack de base',
      add: '+',
    },
  ];

  return (
    <>
      <Box bg="#EBECF0" m={4} height="265px" align="left">
        <Flex p="6">
          <SearchIcon w={6} h={6} />
          <Text ml="3">Rechercher des mots</Text>
        </Flex>

        <Flex align={'center'} justify={'center'}>
          <Text fontSize={'xl'} mt={6}>
            Résumé de la recherche
          </Text>
        </Flex>
      </Box>

      <Flex justify={'center'}>
        <Box mt={'35px'} flexWrap="wrap">
          <Flex align={'center'} justify={'space-between'}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={45} mx={10}>
              <Box h={'auto'} w={'100%'}>
                <Flex align={'center'}>
                  <Text fontSize={'xl'} fontWeight="bold">
                    18 résultats{' '}
                  </Text>
                  <Icon as={BsBox} w={8} h={8} ml="8" />
                  <Text fontSize="md" w="40%" ml={2}>
                    Ces mots nécessitent une personnalisation de cubes
                  </Text>
                </Flex>
              </Box>
              <Box mt={'10px'} h={'auto'} w={'100%'}>
                <Flex align={'center'}>
                  <Text fontSize={'md'}>Trier par:</Text>
                  <Select
                    placeholder="Fréquence d'apparition"
                    borderColor={'gray.400'}
                    fontSize="sm"
                    ml="20px"
                  >
                    <option value="1">1 </option>
                  </Select>
                  <Select
                    placeholder="Nombre de lettres"
                    borderColor={'gray.400'}
                    fontSize="sm"
                    ml="15px"
                  >
                    <option value="1">1 </option>
                  </Select>
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
          <Box mx={5} style={{ flex: 1 }}>
            <TableContainer mt={6}>
              <Table variant="simple">
                <Thead bg={'#EBECF0'} fontSize={'lg'}>
                  <Tr>
                    <Th fontSize={'15px'}>MOT</Th>
                    <Th fontSize={'15px'}>FRÉQUENCE D'APPARITION</Th>
                    <Th fontSize={'15px'}>EXISTE DANS LE PACK</Th>
                    <Th fontSize={'15px'}>AJOUTER À UNE LISTE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map(data => {
                    return (
                      <Tr>
                        <Td
                          style={{ display: 'flex', alignItems: 'center' }}
                          fontSize={'lg'}
                        >
                          {data.word}{' '}
                          {data.word === 'Balustrade' && (
                            <Icon as={BsBox} w={6} h={6} ml="2" />
                          )}
                        </Td>
                        <Td fontSize={'md'}>{data.frequency}</Td>
                        <Td
                          fontSize={'md'}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <Link
                            to={''}
                            style={{
                              color: 'blue',
                              textDecoration: 'underline',
                            }}
                          >
                            {data.inPack}
                          </Link>
                        </Td>
                        <Td textAlign={'center'}>{data.add}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>

      <Flex
        align={'center'}
        justify={'center'}
        mt={8}
        mb={14}
        flexWrap={'wrap'}
      >
        <Text fontSize={'sm'} mb={2}>
          Aucun mot ne vous convient ? Suggérez-nous des mots à ajouter !
        </Text>
        <Button
          color={'white'}
          backgroundColor={'gray.600'}
          fontSize="sm"
          ml="15px"
        >
          Suggérer un mot
        </Button>
      </Flex>
    </>
  );
}
