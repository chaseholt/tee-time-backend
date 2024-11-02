require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route imports
const teeTimeRoutes = require('./routes/teeTimeRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

// Route handling
app.use('/api/tee-times', teeTimeRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
