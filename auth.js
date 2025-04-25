const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const user = new User({ fullName, email, password });
        await user.save();
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;