import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './src/models/User.js';
import connectDB from './src/config/db.js';
dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: 'admin@gaho.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('gaho1234', 10);

    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@gaho.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('Admin created successfully:', admin);
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error.message);
    process.exit(1);
  }
};

createAdmin();
