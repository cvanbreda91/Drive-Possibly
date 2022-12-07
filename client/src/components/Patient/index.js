import React from 'react';
import { Link } from 'react-router-dom';

const PatientList = ({ patients }) => {
console.log (patients)
    return (
        <div>
            {patients &&
                patients.map(patient => (
                    <div key={patient._id} className="card mb-3">
                        <p className="card-header">
                                {patient.patientFirstName}
                        </p>
                        <div className="card-body">
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PatientList;
