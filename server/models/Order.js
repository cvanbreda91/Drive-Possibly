const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
    drug:[Drug.Schema],
    patient:[Patient.Schema]
});

const Order = mongoose.model("Appointment", orderSchema);

module.exports = Order;
