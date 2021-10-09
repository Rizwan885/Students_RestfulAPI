const express = require('express');
require('../db/conn');
const Student = require('../models/students');
const router = new express.Router();

router.post('/students', async (req, res) => {
  try {
    const user = new Student(req.body);
    const result = await user.save();
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Records //
router.get('/students', async (req, res) => {
  try {
    const result = await Student.find();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// Get Records //

// Get Individul Record//

router.get('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById({ _id: _id });
    console.log(studentData);
    if (!studentData) {
      return res.status(404).send();
    } else {
      return res.send(studentData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get Individul Record//

// Update  //

router.patch('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudents = await Student.findByIdAndUpdate(
      { _id: _id },
      req.body,
      { new: true }
    );
    res.send(updateStudents);
  } catch (error) {
    res.status(404).send(err);
  }
});

// Update  //

// Delete Record//

router.delete('/students/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteStudents = await Student.findByIdAndDelete({ _id: _id });
    if (!req.params.id) {
      res.status(400).send();
    }
    res.send(deleteStudents);
  } catch (error) {
    res.status(500).send(err);
  }
});

// Delete Record//

//Exporting

module.exports = router;
