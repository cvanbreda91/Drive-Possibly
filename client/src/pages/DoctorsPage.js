import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import PatientList from '../components/Patient';
import { Box, SimpleGrid, Heading, HStack, Button } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { ADD_PATIENT } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PATIENT, QUERY_ME, QUERY_DOCTOR } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const DoctorsPage = (props) => {
  const [formState, setFormState] = useState({ pateientFirstName: '', patientLastName: '', patientEmail: '' });
  const [addPatient, { error }] = useMutation(ADD_PATIENT);
  const { loading, data } = useQuery(QUERY_PATIENT);
  const patients = data?.patient || [];
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log(patients)
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
      pateientFirstName: '', patientLastName: '', patientEmail: ''
    });
  };

  return (

    <SimpleGrid columns={5} spacingX='40px' spacingY='20px'>
      <Box bg='blue'>
        <HStack>
          <Heading>Patient List</Heading>
          <Popover>
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
                  <Button mt={3} type="submit" colorScheme='blue'>Add!</Button>
                </PopoverBody>
                <PopoverFooter>{error && <div>Cannot add patient</div>}</PopoverFooter>
              </PopoverContent>
            </form>
          </Popover>
        </HStack>
        <PatientList
          patients={patients} />
      </Box>
    </SimpleGrid>
  );
};

export default DoctorsPage;
