import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_patients, QUERY_ME } from "../../utils/queries";

const PatientList = ({patients}) => {
    return( 
         <div className="pList">
                  {patients &&
        patients.map((patient) => (
          <div key={patient._id} className="card mb-3">
            <p className="card-header">
               {patient.patientFirstName} {patient.patientLastName}
            </p>
            {/* <div className="card-body">
             
            </div> */}
          </div>
        ))}
        </div>
    )
};

export default PatientList