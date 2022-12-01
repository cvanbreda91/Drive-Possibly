const { Appointment,Doctor,Patient} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers ={
    Query:{
        doctors:async()=>{
            return Doctor.find().sort();
        }
    }
}
module.exports=resolvers