const express = require("express");
const router = express.Router();
const User = require("../models/User.model.js");
const Habit = require("../models/Habit.model.js");
const Streak = require("../models/Streak.model.js");

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
router.get("/explore/:id", (req, res) => {
  const { id } = req.params;

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
  const userId = req.user._id;

  Promise.all([
    Streak.create({ ownHabit: req.params.id, owner: req.user._id }),
    User.findByIdAndUpdate(userId, { $push: { myHabits: id } }, { new: true }),
  ])
    .then((myHabitInDB) => {
      console.log(myHabitInDB);
      res.status(200).json(myHabitInDB);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});
///show only my habits
router.get("/my-habits", (req, res) => {
  const userId = req.user._id;

  User.findById(userId)
    .populate("myHabits")
    .then((UserFromDB) => {
      res.status(200).json(UserFromDB);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

//detailed my-habits
router.get("/my-habits/:id", (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  Streak.findOne({ownHabit: id, owner: userId})
  .populate("ownHabit")
    .then((streakFromDB) => {
      console.log(streakFromDB)
      res.status(200).json(streakFromDB);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

//add day to streak
router.post("/my-habits/:id", (req, res) => {
  const { id } = req.params; //habitId
  const userId = req.user._id;
  const today = new Date();

  Streak.findOneAndUpdate({ownHabit: id, owner: userId},
    {$push: {"dayCompleted": today}},
    {safe: true, upsert: true, new : true})
  .then((myStreakInDB) => {
        console.log(myStreakInDB);
      
        res.status(200).json(myStreakInDB);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
});

module.exports = router;