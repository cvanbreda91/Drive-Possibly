import { gql } from '@apollo/client';

export const QUERY_DRUGS = gql`
  {
  drugs {
    _id
    description
    dinNumber
    drugName
    inventory
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
    }
  }
`;



export const QUERY_DOCTOR = gql`
{
  doctor {
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
    patients {
      _id
      patientFirstName
      patientLastName
      drId
      drNotes
    }
  }
`;

export const QUERY_SINGLE_PATIENT = gql`
    query Patient($id: ID!){
    patient (_id: $id) {
      _id
      patientFirstName
      patientLastName
      drId
      drNotes
    }
  }
`;