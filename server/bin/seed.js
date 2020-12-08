const mongoose = require("mongoose");
const User = require("../models/User.model.js");
const Habit = require("../models/Habit.model.js");

mongoose.connect(`mongodb://localhost/server`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    username: "Sophie",
    email: "testingsophie@project.com",
    password: "testing",
  },
];

const habits = [
  {
    habitname: "Meditation",
    description: "testing",
    categories: "Sleep",
    streak: 15,
  },
];

Habit.create(habits)
  .then((habitInDB) => {
    console.log(`Created ${habitInDB.length} habit`);
    mongoose.connection.close();
  })
  .catch((error) =>
    console.log(`An error occured while putting habits in the DB: ${error}`)
  );

User.create(users)
  .then((userInDB) => {
    console.log(`Created ${userInDB.length} user`);
    mongoose.connection.close();
  })
  .catch((error) =>
    console.log(`An error occured while putting users in the DB: ${error}`)
  );
