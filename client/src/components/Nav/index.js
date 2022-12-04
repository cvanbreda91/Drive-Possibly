import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {
  Heading,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Box,
  Image,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';


function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Breadcrumb separator=''>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/orderHistory'>Order History</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/' onClick={() => Auth.logout()}>Logout</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      );
    } else {
      return (
        <Flex alignItems={'left'}>
          <Breadcrumb separator=''>
            <Box
              m={[2, 3]}
              as='button'
              height='40px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='25px'
              borderRadius='5px'
              fontSize='25px'
              bg='#53687E'
              color='#FEFEE3'
              _hover={{
                bg: '#53687E',
                transform: 'scale(1.2)',
                borderColor: '#bec3c9',
              }}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/signup'>Signup</BreadcrumbLink>
              </BreadcrumbItem>
            </Box>
            <Box
              m={[2, 3]}
              as='button'
              height='40px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='25px'
              borderRadius='5px'
              fontSize='25px'
              bg='#53687E'
              color='#FEFEE3'
              _hover={{
                bg: '#53687E',
                transform: 'scale(1.2)',
                borderColor: '#bec3c9',
              }}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/login'>Login</BreadcrumbLink>
              </BreadcrumbItem>
            </Box>
          </Breadcrumb>
        </Flex>
      )
    }
  }
  return (
    <>
      <Box bg="#52AD9C" px={10}>
        <Flex h='150px' alignItems={'left'} justifyContent={'space-between'}>
          <Box as={Link} to='/'>
          <Image
    h='150px'
    src='https://github.com/cvanbreda91/PatientsPlease/blob/main/client/src/assets/PatientsPlease-Logo-removebg-preview.png?raw=true'
    alt='PatientsPlease'
  />
          </Box>
          <Flex alignItems={'left'}>
            {showNavigation()}
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} m={[2, 3]}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;