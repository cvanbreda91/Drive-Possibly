import React from 'react';
import { Box, Button } from '@chakra-ui/react'
import PatientView from '../PatientView'

const PatientList = ({ patients,currentPatient,setPatient }) => {
    
    const handleClick = (event) => {
        setPatient(event.target.id)

    }

    return (
        <Box>
            {patients &&
                patients.map(patient => (
                    <Box key={patient._id}>
                        <Button
                            mt={3}
                            bg='#53687E'
                            onClick={handleClick}
                            id={patient._id}
                        >{patient.patientFirstName} {patient.patientLastName}</Button>
                    </Box>
                ))}
        </Box>
    );
};

export default PatientList;
