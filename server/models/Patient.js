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
    unique: true,
    required: true

  },
  patientPassword: {
    type: String,
  },
  drNotes: { 
    type: String 
  },
  appointmentNotes: { 
    type: String 
  },
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }]
});

// Using mongoose.model() to compile a model based on the schema 'patientSchema'
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
