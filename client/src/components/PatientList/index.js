import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation, useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import {
  QUERY_PATIENT,
  QUERY_DOCTOR,
  QUERY_PATIENT,
} from "../../utils/queries";

function PatientList(patientFirstName) {
  const [state, dispatch] = useStoreContext();
  const firstName = patientFirstName;
  const { loading, data: patientData } = useQuery(QUERY_PATIENT);
  useEffect(() => {
    dispatch({
      type: UPDATE_PATIENT,
      patients: patients,
    });
    patientData.patients.forEach((patient) => {
      idbPromise("patients", "put", patient);
    });
  },[patientData,loading,dispatch]);
  const handleClick = (id) =>{
    dispatch({
      type: UPDATE_PATIENT,
      patients: id,
    })
  } 
  return (
    <div className="pList">
      {patients.map((firstName)=>(firstName.patientFirstName))}
    </div>
  );
}

export default PatientList;
