const express = require('express')
const router = express.Router()
const TaskModel = require('../models/TaskModel')

router.post('/signup', async(req, res) => {
    try{
        const {name, email, password } = req.body;
        //create a new user object
        const newTask = new TaskModel({name, email, password});
        //save the user to the database
        const savedUser = await newTask.save();

        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;