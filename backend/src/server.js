import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { protect, admin } from './middleware/authMiddleware.js';
import User from './models/User.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Test admin route
app.get('/api/admin/users', protect, admin, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // hide passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Root
app.get('/', (req, res) => res.send('GAHO Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
