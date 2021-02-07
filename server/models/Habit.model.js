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
      enum: ["Nutrition", "Energy", "Sleep", "Mental Health", "Relax", "Mind"],
      // lifestyle medicine=
      // wholefood-plant-based diet: Nutrition,
      //sleep,
      //harmful substance avoidance,
      //social support,
      //stress management: relax,
      //physical activity: energy?
      //microbiome
    },
  },
  { timestamps: true }
);

module.exports = model("Habit", habitSchema);
