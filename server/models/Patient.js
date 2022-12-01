// Require schema and model from mongoose
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Construct a new instance of the schema class
const patientSchema = new Schema({
  // Configure individual properties using Schema Types
  patientFirstName: { 
    type: String, 
    required: true
  },
  patientLastName: { 
    type: String, 
    required: true
  },
  patientEmail: {
    type: String,
    required: true,
    unique: true
  },
  patientPassword: {
    type: String,
    required: true,
    minlength: 5
  },
  drNotes: { 
    type: String 
  },
  appointmentNotes: { 
    type: String 
  },
  appointments: [Appointment.schema]
});

// Using mongoose.model() to compile a model based on the schema 'patientSchema'
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
