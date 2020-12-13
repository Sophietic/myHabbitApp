const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const streakSchema = new Schema(
  {
    owner: 
      { type: Schema.Types.ObjectId, ref: "User" },
    ownHabit: 
      { type: Schema.Types.ObjectId, ref: "Habit" },
    dayCompleted: {
      type: [Date],
      default: null,
    },
  },
  { timestamps: true }
);

streakSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
module.exports = model("Streak", streakSchema);