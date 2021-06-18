const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

// Route to get workouts
router.get("/api/workouts", function (req, res) {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Route to create a new workout

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

// Get workouts in a range
router.get("/api/workouts/range", function (req, res) {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts/range", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

// Route to update a specific workout by ID
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
