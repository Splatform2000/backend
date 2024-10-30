const express = require("express");
const ActivityModel = require("../models/ActivityLogs");

const route = express.Router();

// Get all activities
route.get("/", async (req, res) => {
  try {
    const docs = await ActivityModel.find().sort({ createdAt: "desc" });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Get activity by ID
route.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Missing URL parameter: id");
  }

  try {
    const doc = await ActivityModel.findById(id);
    if (doc) {
      return res.json({ success: true, doc });
    } else {
      return res.status(404).json({ success: false, error: "Activity does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
});

// Create a new activity
route.post("/create", async (req, res) => {
  const body = req.body;

  try {
    const doc = await ActivityModel.create(body);
    res.status(201).json({ success: true, doc });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Something went wrong" });
  }
});

// Update an activity
route.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Missing URL parameter: id");
  }

  try {
    const doc = await ActivityModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) {
      return res.status(404).json({ success: false, error: "Activity does not exist" });
    }
    return res.json({ success: true, doc });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Failed to edit activity" });
  }
});

// Delete an activity
route.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Missing URL parameter: id");
  }

  try {
    const doc = await ActivityModel.findByIdAndRemove(id);
    if (!doc) {
      return res.status(404).json({ success: false, error: "Activity does not exist" });
    }
    res.json({ success: true, message: "Activity deleted successfully", doc });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Export the route
module.exports = route;
