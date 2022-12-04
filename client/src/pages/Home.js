import React from "react";
import PatientNotes from "./PatientNotes";
import Nav from "../components/Nav";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Being a Doctor{' '}
          <Text as={'span'} color={'orange.400'}>
            Just got Easier
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss an appointment. Keep track of your patients,
          their medications, and your notes - all in one conveient space!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            <Link href="/signup">
              Get started!
            </Link>
          </Button>
        </Stack>
        <Stack>
          <Text color={'gray.500'} maxW={'3xl'}>
            Already have an account?
          </Text>
        </Stack>
        <Stack>
          <Button rounded={'full'} px={6} as={Link} to='/login'>
          <Link href="/login">
              Log in here!
            </Link>
          </Button>
        </Stack>
        <Flex w={'full'}>
          Put pic here
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home;
