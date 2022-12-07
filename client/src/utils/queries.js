import { gql,useQuery  } from '@apollo/client';

export const QUERY_DRUGS = gql`
  query getDrugs($dinNumber: String) {
    drugs(dinNumber: $dinNumber) {
      _id
      drugName
      inventory
      dinNumber
      description
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($drugs: [ID]!) {
//     checkout(drugs: $drugs) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_DRUGS = gql`
//   {
//     drugs() {
//       _id
//       drugName
//       inventory
//       dinNumber
//       image
//     }
//   }
// `;

export const QUERY_DOCTOR = gql`
query user($id: ID!) {
  doctor(_id: $id) {
    _id
    drEmail
    drFirstName
    drLastName
    drPassword
    patients {
      _id
      appointmentNotes
      drNotes
      patientFirstName
      patientLastName
      patientPassword
    }
  }
}
`;

export const QUERY_PATIENT = gql`
query Query($id: ID) {
  patient(_id: $id) {
    _id
    appointmentNotes
    drNotes
    patientEmail
    patientFirstName
    patientLastName
  }
}

`;
