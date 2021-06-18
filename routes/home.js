const router = require("express").Router();
const express = require("express");
const path = require("path");

// GET route for the add exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET route for the dashboard
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
