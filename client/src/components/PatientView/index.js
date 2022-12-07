import React, { useState } from "react";
import PatientNotes from ".";
import Drugs from "../Drugs";

import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../../utils/queries";

const PatientView = ({ currentPatient }) => {
  const [notesState,setNotesState] = useState()
  const saveNotes = ()=>{

  }
  return (
    <div className="pView">
      <div className="pDetail">
        <h2 style={{ color: "#AC6666" }}>
          {currentPatient.patientFirstName} {currentPatient.patientLastName}{" "}
        </h2>
        <div className="pNote">
          <h2>
            Notes for {currentPatient.patientFirstName}{" "}
            {currentPatient.patientLastName}{" "}
          </h2>
          <form onSubmit={saveNotes}>
            <textarea id="noteBox">
              At w3schools.com you will learn how to make a website. They offer
              free tutorials in all web development technologies.
            </textarea>
            <button>Save Notes</button>
          </form>
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
  );
};

export default PatientView;
