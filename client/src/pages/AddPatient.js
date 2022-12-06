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
    PopoverFooter
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
                <div></div>

            )
        }

    );
}

export default AddPatient;