const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const streakSchema = new Schema(
  {    
    owner: {
      type: String,
    }, 
    ownHabit: {
      type: String,
    }, 
      dayCompleted: {
        type: Date,
      },
  },
  { timestamps: true }
);

module.exports = model('Streak', streakSchema);
