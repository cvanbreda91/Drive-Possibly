import React from "react";
import PatientList from "../components/PatientList";
import auth from '../utils/auth'
const DoctorPage = () => {
  console.log(auth.getToken());

  return (
    <div className="drDashboardContainer">
          <PatientList />
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
