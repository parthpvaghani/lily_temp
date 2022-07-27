import { CalendarIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';

export default function Research() {
  return (
    <>
      <Box bg="#EBECF0" m={4} style={{ flex: 1 }} height="265px" align="left">
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

      <Box px="10%" mt={'35px'}>
        <Flex align={'center'} justify={'space-between'}>
          <Box>
            <Flex align={'center'}>
              <Text fontSize={'xl'} fontWeight="bold">
                18 résultats{' '}
              </Text>
              <CalendarIcon w={8} h={8} ml="8" />
              <Text fontSize="md" w="40%">
                Ces mots nécessitent une personnalisation de cubes
              </Text>
            </Flex>
          </Box>

          <Box mt={'10px'}>
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
        </Flex>

        <TableContainer mt={6}>
          <Table variant="simple">
            <Thead bg={'#EBECF0'} fontSize={'lg'}>
              <Tr>
                <Th>MOT</Th>
                <Th>FRÉQUENCE D'APPARITION</Th>
                <Th>EXISTE DANS LE PACK</Th>
                <Th>AJOUTER À UNE LISTE</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Abeille</Td>
                <Td>Élevée</Td>
                <Td>Insectes</Td>
                <Td>+</Td>
              </Tr>
              <Tr>
                <Td>Arbre</Td>
                <Td>Élevée</Td>
                <Td></Td>
                <Td>+</Td>
              </Tr>
              <Tr>
                <Td>Balustrade</Td>
                <Td>Faible</Td>
                <Td></Td>
                <Td>+</Td>
              </Tr>
              <Tr>
                <Td>Brique</Td>
                <Td>Moyenne</Td>
                <Td></Td>
                <Td>+</Td>
              </Tr>
              <Tr>
                <Td>Mur</Td>
                <Td>Élevée</Td>
                <Td>Pack de base</Td>
                <Td>+</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Flex align={'center'} justify={'center'} mt={8} mb={14}>
          <Text fontSize={'sm'}>
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
      </Box>
    </>
  );
}
