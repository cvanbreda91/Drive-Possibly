// Require schema and model from mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Construct a new instance of the schema class
const doctorSchema = new Schema({
  // Configure individual properties using Schema Types
  drFirstName: { 
    type: String, 
    required: true
  },
  drLastName: { 
    type: String, 
    required: true
  },
  drEmail: {
    type: String,
    required: true,
    unique: true
  },
  drPassword: {
    type: String,
    required: true,
    minlength: 5
  },
  appointments: [Appointment.schema]
});

// Using mongoose.model() to compile a model based on the schema 'doctorSchema'
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
