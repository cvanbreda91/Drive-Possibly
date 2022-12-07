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

export const QUERY_ME = gql`
  {
    me {
      _id
      drEmail
      drFirstName
      drLastName
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      drEmail
      drFirstName
      drLastName
      friendCount
    }
  }
`;


export const QUERY_DOCTOR = gql`
query Doctor($id: ID!) {
  doctor(_id: $id) {
    _id
    drEmail
    drFirstName
    drLastName
    patients {
      _id
      patientFirstName
      patientLastName
      patientEmail
      drId
      drNotes
    }
  }
}
`;


export const QUERY_PATIENT = gql`
   {
    patient {
      _id
      patientFirstName
      patientLastName
    }
  }
`;