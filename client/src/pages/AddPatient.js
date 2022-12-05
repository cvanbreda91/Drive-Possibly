import React, { useState, useMutation } from 'react';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

function AddPatient(props) {
const [formState, setFormState] = useState({ drFirstName: " ", drLastName: " ", drEmail: '', drPassword: '' });
// const [addPatient] = useMutation(ADD_PATIENT);

// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const mutationResponse = await addDoctor({
//         variables: {
//             drFirstName: formState.drFirstName,
//             drLastName: formState.drLastName,
//             drEmail: formState.drEmail,
//             drPassword: formState.drPassword
//         },
//     });
//     const token = mutationResponse.data.addDoctor.token;
//     Auth.login(token);
// };

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value,
    });
};

return (
    <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                Add New Patient
            </Heading>
            <FormControl id="userName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                    placeholder="John"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                />
            </FormControl>
            <FormControl id="userName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                    placeholder="Doe"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                    placeholder="john.doe@example.com"
                    _placeholder={{ color: 'gray.500' }}
                    type="email"
                />
            </FormControl>
            <Stack spacing={6} direction={['column', 'row']}>
                <Button
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                        bg: 'red.500',
                    }}>
                    Cancel
                </Button>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                        bg: 'blue.500',
                    }}>
                    Submit
                </Button>
            </Stack>
        </Stack>
    </Flex>
);
}

export default AddPatient;