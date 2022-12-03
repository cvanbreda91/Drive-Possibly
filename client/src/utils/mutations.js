import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      doctor {
        _id
        email
      }
    }
  }
`;

export const ADD_DOCTOR = gql`
  mutation addDoctor(
    $drFirstName: String!
    $drLastName: String!
    $email: String!
    $password: String!
  ) {
    addDoctor(
      drFirstName: $drFirstName
      drLastName: $drLastName
      email: $email
      password: $password
    ) {
      token
      doctor {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($drugs: [ID]!) {
    addOrder(drugs: $drugs) {
      purchaseDate
      drugs {
        _id
        drugName
        inventory
        dinNumber 
        description
      }
    }
  }
`;

export const ADD_PATIENT = gql`
  mutation addPatient($patient: [ID]!) {
    addPatient(patient: $patients) {
      patientFirstName
      patientLastName
      patientEmail
    }
  }
`;