import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_DOCTOR } from '../utils/mutations';
import {
  InputGroup,
  InputRightElement,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  HStack,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  FormControl,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];
function Signup(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({ drEmail: '', drPassword: '' });
  const [addDoctor, { error }] = useMutation(ADD_DOCTOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addDoctor({
      variables: {
        drFirstName: formState.drFirstName,
        drLastName: formState.drLastName,
        drEmail: formState.drEmail,
        drPassword: formState.drPassword
      },
    });
    const token = mutationResponse.data.addDoctor.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Keep Track of Patients{' '}
            <Text
              as={'span'}
              bg="#5CC8FF"
              bgClip="text">
              &
            </Text>{' '}
            Appoinments {' '}
            <Text
              as={'span'}
              bg="#5CC8FF"
              bgClip="text">
              &
            </Text>{' '}
            Medical Information
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bg: "#5CC8FF",
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bg: "#52AD9C",
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Sign Up Today
              <Text
                as={'span'}
                bg="#5CC8FF"
                bgClip="text">
                !
              </Text>
            </Heading>
          </Stack>
          <Flex>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
            <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="drFirstName">First Name:</label>
          <input
            placeholder="First"
            name="drFirstName"
            type="drFirstName"
            id="drFirstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drLastName">Last Name:</label>
          <input
            placeholder="Last"
            name="drLastName"
            type="drLastName"
            id="drLastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drEmail">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="drEmail"
            type="drEmail"
            id="drEmail"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="drPassword">Password:</label>
          <input
            placeholder="******"
            name="drPassword"
            type="drPassword"
            id="drPassword"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>Sign up failed</div>}
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}

export default Signup;