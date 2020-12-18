const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const habitSchema = new Schema(
  {
    habitname: {
      type: String,
      required: true,
    },
    dailyhabit: {
      type: String,
      default: null,
    },
    // shortdescription: {
    //   type: String,
    //   default: null,
    // },
   description: {
      type: String,
      default: null,
    },
    science: {
      type: String,
      default: null,

    },
    categories: {
      type: String,
      enum: ["Nutrition", "Energy", "Sleep", "Mental Health"],
    },
  },
  { timestamps: true }
);

module.exports = model("Habit", habitSchema);