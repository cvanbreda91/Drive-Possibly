import React from 'react';
import { Box, Button } from '@chakra-ui/react'
import PatientView from '../PatientView'

const PatientList = ({ patients }) => {
    const handleClick = (event) => {
        console.log("howdy")
        return (
            <Box>
                <PatientView />
            </Box>
        )

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
                        >{patient.patientFirstName} {patient.patientLastName}</Button>
                    </Box>
                ))}
        </Box>
    );
};

export default PatientList;
