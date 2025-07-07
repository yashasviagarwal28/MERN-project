require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
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
