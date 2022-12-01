// Require schema and model from mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
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
  patients:[{ type: Schema.Types.ObjectId, ref: "Patient" }],
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }]
});
doctorSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
// compare the incoming password with the hashed password
doctorSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};
// Using mongoose.model() to compile a model based on the schema 'doctorSchema'
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
