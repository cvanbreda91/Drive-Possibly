const { gql } = require('apollo-server-express');

const typeDefs =gql`
type Doctor{
    _id:ID
    drFirstName:String
    drLastName:String
    drEmail:String
    
}
type Appointment{
    _id:ID
    appointmentDate:String
    doctor:[Doctor]
    patient:[Patient]
    location:String
    createdAt:String
    updatedAt:String
}

type Patient{
    patientFirstName:String
    patientLastName:String
    patientEmail:String
    patientPassword:String
    drNotes:String
    appointmentNotes:String
    appointments:[Appointment]
}

type Drug{
    drugName:String
    inventory:Int
    dinNumber:Int
    description:String
}

type Order{
    drug:[Drug]
    patient:[Patient]
}

type Auth {
    token: ID!
    doctor:Doctor
  }


type Query{
    doctors:[Doctor]
    patient:[Patient]
    drugs:[Drug]
    order:[Order]
}

type Mutation{
    login(email: String!, password: String!): Auth
    addDoctor(email: String!, password: String!): Auth
    addPatient(email: String!, password: String!): Auth
    addNote(noteText: String!): Patient
    removeNote(noteText: String!): Patient
    addAppointment(appointmentDate: String!): Appointment
    removeAppointment(appointmentDate: String!): Appointment
    updateDrug(_id: ID!, inventory: Int!): Drug
    addOrder(drug: [ID]!, patient:ID!): Order
    updateDoctor(drFirstName: String, drLastName: String, drEmail: String, password: String): Doctor
}

`



module.exports = typeDefs;