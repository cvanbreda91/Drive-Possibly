import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, CardBody, CardFooter, Button } from '@chakra-ui/react'
const PatientList = ({ patients }) => {
console.log (patients)
    return (

        
        <Box>
            {patients &&
                patients.map(patient => (
                    <Box key={patient._id}>
                        <Button mt={3} bg='#53687E'>{patient.patientFirstName} {patient.patientLastName}</Button>
                                
                    </Box>
                ))}
        </Box>
    );
};

export default PatientList;
