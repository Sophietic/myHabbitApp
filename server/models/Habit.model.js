const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const habitSchema = new Schema(
  {
    habitname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    categories: {
      type: String,
      enum: ["Nutrition", "Energy", "Sleep"],
    },
    streaks: [
      { type: Schema.Types.ObjectId, ref: "Streak" },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

module.exports = model("Habit", habitSchema);
