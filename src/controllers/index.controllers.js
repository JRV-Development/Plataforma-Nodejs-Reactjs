const IndexCtrls = {};
const IndexModels = require("../models/Index");

IndexCtrls.getIndex = (req, res) => {
  res.json({ message: "Index" });
};

module.exports = IndexCtrls;
