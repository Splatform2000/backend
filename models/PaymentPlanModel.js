const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  // Name of the payment plan
  name: {
    type: String,
  },
  // Array of plans associated with the payment
  plans: [{
    name: String,
    plan: String,
    description: String,
    price: String,
  }],
  // Array of services associated with the payment
  services: [{
    name: String,
    plan1: String,
    plan2: String,
    plan3: String,
  }],
  // Default data ID for the payment plan
  dataID: {
    type: String,
    default: "paymentPlan",
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

const PaymentPlan = mongoose.model('canteenpayplan', PaymentSchema);
module.exports = PaymentPlan;
