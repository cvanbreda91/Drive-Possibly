import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import PatientList from '../components/Patient';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PATIENT, QUERY_ME, QUERY_DOCTOR } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const DoctorsPage = (props) => {
  const { drEmail: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_PATIENT);
  const patients = data?.patient || [];

console.log(patients)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
        <PatientList 
        patients={patients}/>
        </div>
        </div>

  );
};

export default DoctorsPage;
