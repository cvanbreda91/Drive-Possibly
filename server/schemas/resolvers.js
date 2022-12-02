const { Appointment,Doctor,Patient} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers ={
    Query:{
        doctors:async()=>{
            return Doctor.find().sort();
        },
        // appointments:async(parent)=>{ 
        //     const params = {             
        //     }
        // }
    }
}
module.exports=resolvers