require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
app.post('/api/contact', async (req, res) => {
  console.log("Received form data:", req.body); // <== ADD THIS
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error); // <== SEE ERROR HERE
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
