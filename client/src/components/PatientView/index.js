import React from 'react';
import { Box, Button } from '@chakra-ui/react'
import PatientShop from '../PatientShop'
const PatientView = ({ patients }) => {

    return (
        <Box>
            <div className='pView'>
                <h1>Test</h1>
            </div>
            < PatientShop />
        </Box>
    );
};

export default PatientView;