const express = require("express");
require("dotenv").config();
const ActivityModel = require("../models/activity");

const router = express.Router();

router.get("/", async (req, res) => {
  const activities = await ActivityModel.find();
  res.send(activities.map((act) => act.toJSON()));
});

router.get("/:activityId", async (req, res) => {
  console.log(req.params);
  const activity = await ActivityModel.findById(req.params.activityId);
  if (!activity) {
    res.status(404).end();
  }
  res.json(activity.toJSON());
});

router.post("/", async (req, res) => {
  const activity = new ActivityModel(req.body);
  const validateResult = activity.validateSync();
  if (validateResult) {
    return res.status(400).send(validateResult);
  }
  await activity.save();
  return res.send(activity.toJSON());
});

router.patch("/:activityId", (req, res) => {
  res.send("update");
});

router.delete("/:activityId", (req, res) => {
  res.send("delete");
});

module.exports = router;
