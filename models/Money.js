const mongoose = require("mongoose");

const MoneySCH = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});
module.exports = mongoose.models.Money || mongoose.model("Money", MoneySCH);
