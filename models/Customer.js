const mongoose = require("mongoose");

const CustomerSCH = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add a name"],
    maxlength: [20, "Title cannot be more than 40 characters"],
  },
  appointment: {
    type: Date,
    min: "2023-01-01",
  },
  types: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
  },
});
module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSCH);
