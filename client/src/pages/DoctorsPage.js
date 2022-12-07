import React from "react";

import PatientList from "../components/PatientList";
import PatientView from "../components/PatientView";
const DoctorPage =  () => {

//  const user = auth.getProfile();

  // const{ loading ,data } =useQuery(QUERY_DOCTOR,{variables:{id:user.data._id}})
  // console.log(data)
  return (
    <div className="drDashboardContainer">
      <PatientList />
      <PatientView /> 
      {/* <h1> Dr. {data.doctor.drFirstName} {data.doctor.drFirstName}</h1> */}
    
          
    </div>
  );
};

export default DoctorPage;
