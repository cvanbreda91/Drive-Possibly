const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  appointmentDate: {
    type: Date,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient'
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
