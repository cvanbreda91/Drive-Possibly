import React, {useState,useRef}from 'react';
import { Box, Button } from '@chakra-ui/react'
import { useQuery, useMutation } from '@apollo/client';
import PatientShop from '../PatientShop'
import { QUERY_PATIENT, QUERY_SINGLE_PATIENT } from '../../utils/queries';
import { UPDATE_PATIENT } from '../../utils/mutations';

const PatientView = ({ currentPatient }) => {
    const ref=useRef(null)
    // const updatePatientNotes =() =>{
    //     setFormState({drNotes:})
    // }
    const [updatePatientNotes, { error }] = useMutation(UPDATE_PATIENT);
    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        console.log(ref.current.value)
        // setFormState()
        try {
        const { data } = await updatePatientNotes({
          variables: { ...formState },
        });
      } catch (e) {
        console.error(e);
      }
  

    }
    const { loading, data } = useQuery(QUERY_SINGLE_PATIENT,{
        variables: {id:currentPatient}
      });
      const patient = data?.patient || [];
    //   console.log(patient);
    const [formState, setFormState] = useState({ drNotes:patient.drNotes});
    return (
        <Box>
            <div className='pView'>
                <h1> PatientName: {patient.patientFirstName} {patient.patientLastName}</h1>
                <h1> Notes</h1>
                <form onSubmit={handleFormSubmit}>
                <textarea name ="notes" value = {formState.drNotes}className='pNote' ref={ref}></textarea><br />
                <button type="submit">Update Notes</button>
                </form>
                <div className = "pAppointment">
                    <h1>Appointment Details</h1>
                    
            </div>
            </div>
    
            <PatientShop />
        </Box>
    );
};

export default PatientView;