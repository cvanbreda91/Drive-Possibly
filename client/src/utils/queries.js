import { gql } from '@apollo/client';

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
  {
    doctor {
        drFirstName
        drLastName
        drEmail
        patients {
          _id
          patientFirstName
          patientLastName
          patientEmail
          drNotes
          appointmentNotes
          appointments
          purchaseDate}
        appointments {
          _id
          appointmentDate
          doctor
          patient
          location
        }
      }
    }
`;

// export const QUERY_PATIENT = gql`
//   {
//     patient {
//       _id
//       patientFirstName
//       patientLastName
//       patientEmail
//       drNotes
//       appointmentNotes
//       appointments {
//         _id
//         appointmentDate
//         doctor
//         patient
//         location
//       }
//     }
//   }
// `;
