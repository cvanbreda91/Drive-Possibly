import React,{useEffect, useState}from "react";
import { useQuery } from "@apollo/client";
import PatientList from "../components/PatientList";
import auth from '../utils/auth'
import { QUERY_DOCTOR } from "../utils/queries";
import PatientView from "../components/PatientView";
const DoctorPage = () => {
  const [currentPatient,setCurrentPatient]= useState()
  const user = auth.getProfile();
 
  const{ loading ,data } =useQuery(QUERY_DOCTOR,{variables:{id:user.data._id}})
  console.log(data)
  return (
    
    <div className="drDashboardContainer">
      <h1> Dr. {data.doctor.drFirstName} {data.doctor.drFirstName}</h1>
          <PatientList patients={data.doctor.patients} currentPatient={currentPatient} setCurrentPatient={setCurrentPatient}/>
          <PatientView currentPatient={currentPatient}/>
    </div>
  );
};

export default DoctorPage;
