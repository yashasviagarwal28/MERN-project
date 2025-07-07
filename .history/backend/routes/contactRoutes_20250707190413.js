const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // adjust path if needed

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('❌ Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

module.exports = router;
