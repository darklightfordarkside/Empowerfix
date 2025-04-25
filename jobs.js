const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

router.post('/apply', async (req, res) => {
    const { fullName, email, jobTitle, linkedIn, portfolio, reason } = req.body;

    try {
        const application = new Application({ fullName, email, jobTitle, linkedIn, portfolio, reason });
        await application.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;