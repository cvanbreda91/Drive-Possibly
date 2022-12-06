import React, { useState, useMutation } from 'react';
import {
    Button,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Popover,
    PopoverTrigger,
    PopoverHeader,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverFooter,
    PopoverBody,
    ButtonGroup
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
        function WalkthroughPopover() {
            const initialFocusRef = React.useRef()
            return (
                <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                >
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
                        <PopoverHeader pt={4} fontWeight="bold" border="0">
                            Manage Your Channels
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </PopoverBody>
                        <PopoverFooter
                            border="0"
                            d="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            pb={4}
                        >
                            <Box fontSize="sm">Step 2 of 4</Box>
                            <ButtonGroup size="sm">
                                <Button colorScheme="green">Setup Email</Button>
                                <Button colorScheme="blue" ref={initialFocusRef}>
                                    Next
                                </Button>
                            </ButtonGroup>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover>
            )
        }

    );
}

export default AddPatient;