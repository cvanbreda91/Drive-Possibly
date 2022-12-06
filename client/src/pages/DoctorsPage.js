import React,{useEffect}from "react";
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from '../utils/GlobalState';
import { useQuery } from "@apollo/client";
import PatientList from "../components/PatientList";
import auth from '../utils/auth'
import { QUERY_DOCTOR } from "../utils/queries";
import { UPDATE_DOCTOR } from "../utils/actions";
const DoctorPage = () => {

  const user = auth.getProfile();

  const{ loading ,data } =useQuery(QUERY_DOCTOR,{variables:{id:user.data._id}})
  console.log(data)
  return (
    <div className="drDashboardContainer">
      <h1> Dr. {data.doctor.drFirstName} {data.doctor.drFirstName}</h1>
          <PatientList patients={data.doctor.patients}/>
      <div className="pView">
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
            <appointmentView />
          </div>
        </div>
        <div className="pShoptool">
          <h1>Ecommerce</h1>
          <div className="pPrescription">
            <h3>Prescription</h3>
          </div>
          <div className="pShopView">
            <h3>Shop</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
