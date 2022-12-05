import React from "react";
import { useQuery } from "react-apollo";
import { QUERY_DOCTOR } from "../utils/queries";
const DoctorPage = () => {
  //const { id: DoctorId } =  //useParams()
  const doctorId ='638d20a9b2097689c8698e02'
  const { loading, data } = useQuery(QUERY_DOCTOR, {
    variables: { id: doctorId },
  });
  return (
    <div className="drDashboardContainer">
      <div className="pList">
        <h1>Patient List</h1>
        <div className="pName">
          <h3>John Doe</h3>
          <h4>Appt Time- 2:30</h4>
        </div>

      </div>
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
