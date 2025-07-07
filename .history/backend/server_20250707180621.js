const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy POST route to simulate contact form submission
app.post('/api/contact', (req, res) => {
  console.log('Received contact form data:', req.body); // 👈 This line is important
  res.status(201).json({ message: 'Contact form received!', data: req.body });
});

// Dummy GET route to simulate contact list
app.get('/api/contact', (req, res) => {
  res.json([
    {
      name: "Test User",
      email: "test@example.com",
      phone: "1234567890",
      message: "Sample message"
    }
  ]);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
