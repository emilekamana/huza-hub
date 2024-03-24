const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const serviceTypeSchema = new mongoose.Schema(
  {
    serviceTypeName: {
      type: String,
      trim: true,
      required: false,
    },

    // user: {
    //     type: ObjectId,
    //     ref: "User",
    //     required: true
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ServiceType", serviceTypeSchema);
