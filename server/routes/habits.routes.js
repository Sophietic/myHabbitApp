const express = require("express");
const router = express.Router();
const User = require("../models/User.model.js");
const Habit = require("../models/Habit.model.js");

//list habits
router.get("/explore", (req, res) => {
  Habit.find()
    .then((allHabitsFromDB) => {
      console.log(allHabitsFromDB);
      res.status(200).json(allHabitsFromDB);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});


//create new habit
router.post("/create", (req, res) => {
  const { habitname, description, categories } = req.body;

  Habit.create({ habitname, description, categories })
    .then((newHabitInDB) => {
      console.log(newHabitInDB);
      res.status(200).json(newHabitInDB);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

//detailed page
router.get('/explore/:id', (req, res) => {
  const {id} = req.params;

  Habit.findById(id)
  .then((habitFromDB) => {
    res.status(200).json(habitFromDB);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json(error);
  });
});

//addtomyHabits
router.post("/explore/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  const userId = req.user._id;
  

// const testuserId =  "5fcf442cf2cd010c3a38f489"

  User.findByIdAndUpdate(
    userId, {
    $push: {myHabits: id}
  },
    { new: true })
    .then((myHabitInDB) => {
      console.log(myHabitInDB)
      res.status(200).json(myHabitInDB)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json(error)
    })
})

module.exports = router;
