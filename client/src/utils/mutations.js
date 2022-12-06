import { gql } from '@apollo/client';

export const LOGIN_DOCTOR = gql`
  mutation login($drEmail: String!, $drPassword: String!) {
    login(drEmail: $drEmail, drPassword: $drPassword) {
      token
      doctor {
      _id
      drEmail
      drPassword
    }
  }
}
`;

export const ADD_DOCTOR = gql`
  mutation addDoctor(
    $drFirstName: String!
    $drLastName: String!
    $drEmail: String!
    $drPassword: String!
  ) {
    addDoctor(
      drFirstName: $drFirstName
      drLastName: $drLastName
      drEmail: $drEmail
      drPassword: $drPassword
    ) {
      token
      doctor {
        _id
        drEmail
      }
    }
  }
`;

// export const ADD_DRUG = gql`
//   mutation addDrug(
//     $drugName: String!
//     $inventory: Int!
//     $dinNumber: String!
//     $description: String!
//   ) {
//     addDrug(
//       drugName: $drugName
//       inventory: $inventory
//       dinNumber: $dinNumber
//       description: $description
//     ) 
//   }
// `;

// export const ADD_ORDER = gql`
//   mutation addOrder($drugs: [ID]!) {
//     addOrder(drugs: $drugs) {
//       purchaseDate
//       drugs {
//         _id
//         drugName
//         inventory
//         dinNumber 
//         description
//       }
//     }
//   }
// `;

// export const ADD_PATIENT = gql`
//   mutation addPatient(
//     $patientFirstName: String!
//     $patientLastName: String!
//     $patientEmail: String!
//   ) {
//     addPatient(
//       patientFirstName: $patientFirstName
//       patientLastName: $patientLastName
//       patientEmail: $patientEmail
//     )
//   }
// `;