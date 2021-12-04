const { Schema, model } = require("mongoose");

const IndexSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = model("Index", IndexSchema);
