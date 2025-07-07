const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const app = express();

app.use(express.json());


const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const diaryRoutes = require('./routes/diaryRoutes');
const aiRoutes = require('./routes/aiRoutes');

app.use('/api/auth', authRoutes);   // For register/login
app.use('/api', userRoutes);        // For /profile
app.use('/api', foodRoutes);        // For /foods
app.use('/api', diaryRoutes);       // For /diary, /dashboard
app.use('/api', aiRoutes);          // For /ai/suggest-meal


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
