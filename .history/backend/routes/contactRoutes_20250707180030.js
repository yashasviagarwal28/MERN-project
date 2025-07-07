const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/contact', async (req, res) => {
    try {
      const contacts = await Contact.find(); 
      res.json(contacts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  module.exports = router;