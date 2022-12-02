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

type Query{
    doctors:[Doctor]
}
`
module.exports = typeDefs;