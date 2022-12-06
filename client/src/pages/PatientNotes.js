import React from 'react';
import PatientNotes from '../components/PatientNotes';
import Drugs from '../components/Drugs';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const PatientNote = () => {
    <div className="pDetail">
    <h2 style={{ color: "#AC6666" }}>John Doe</h2>
    <div className="pNote">
      <h2>Notes for John Doe</h2>
      <textarea id ='noteBox'>
        At w3schools.com you will learn how to make a website. They offer
        free tutorials in all web development technologies.
      </textarea>
      <button>Save Notes</button> 
    </div>
    <div className="pAppointment">
      <h2>Appointment Details</h2>
    </div>
  </div>
}

export default PatientNote;