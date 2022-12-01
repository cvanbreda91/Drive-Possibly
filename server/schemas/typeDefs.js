const { gql } = require('apollo-server-express');

const typeDefs =gql`
type doctor{
    _id:ID
    drFirstName:String
    drLastName:String
    drEmail:String
    
}
type Query{
    doctors:[doctor]
}
`
module.exports = typeDefs;