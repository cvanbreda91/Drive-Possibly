import React, { useState } from 'react';
import PatientList from '../components/PatientList';
import DrugList from '../components/Drugs'
import { Box, Heading, HStack, Button } from '@chakra-ui/react'
import {
  Grid,
  GridItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Alert,
  AlertIcon,
  PopoverArrow,
  PopoverCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'
import { ADD_PATIENT } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PATIENT, QUERY_DRUGS } from '../utils/queries';
import Auth from '../utils/auth';

const DoctorsPage = (props) => {
  const initRef = React.useRef();
  const [formState, setFormState] = useState({ pateientFirstName: '', patientLastName: '', patientEmail: '', drNotes: '' });
  const [addPatient, { error }] = useMutation(ADD_PATIENT);
  const { loading, data } = useQuery(QUERY_PATIENT);
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  const patients = data?.patients || [];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPatient({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      pateientFirstName: '', patientLastName: '', patientEmail: '', drNotes: '',
    });
  };
// console.log (userData.me.doctorFristName)
  return (
    <Grid templateColumns='repeat(5, 1fr)'  templateRows='repeat(2, 1fr)' gap={6}>
      <GridItem colSpan={1} rowSpan={2}>
      <Box bg='blue'>
        <HStack>
          <Heading>Patient List</Heading>
          <Popover closeOnBlur={false} placement='left' initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
              <>
                <PopoverTrigger>
                  <Button>Add Patient</Button>
                </PopoverTrigger>
                <form onSubmit={handleFormSubmit}>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Add New Patient</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <FormControl id="patientFirstName">
                        <FormLabel htmlFor="patientFirstName">First Name</FormLabel>
                        <Input type="patientFirstName"
                          placeholder="Jane"
                          name="patientFirstName"
                          id="patientFirstName"
                          onChange={handleChange} />
                      </FormControl>
                      <FormControl id="patientLastName">
                        <FormLabel mt={1} htmlFor="patientLastName">Last Name</FormLabel>
                        <Input type="patientLastName"
                          placeholder="Doe"
                          name="patientLastName"
                          id="patientLastName"
                          onChange={handleChange} />
                      </FormControl>
                      <FormControl mt={1} id="patientEmail">
                        <FormLabel htmlFor="patientEmail">email</FormLabel>
                        <Input type="patientEmail"
                          placeholder="jane.doe@email.com"
                          name="patientEmail"
                          id="patientEmail"
                          onChange={handleChange} />
                      </FormControl>
                      <Button mt={3}
                        onClick={(onClose)}
                        ref={initRef}
                        type="submit"
                        colorScheme='blue'>Add!</Button>
                    </PopoverBody>
                  </PopoverContent>
                </form>
              </>)}
          </Popover>
        </HStack>
        {error && <Alert status='error'>
          <AlertIcon />
          There was an error processing your request
        </Alert>}
        <PatientList
          patients={patients} />
      </Box>
      </GridItem>
      <GridItem colSpan={4} bg='papayawhip' />
      <GridItem colSpan={4} bg='papayawhip'>
      <Heading>Add Perscriptions</Heading>
      </GridItem>
    </Grid>
  );
};

export default DoctorsPage;
