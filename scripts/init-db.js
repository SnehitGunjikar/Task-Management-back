require('dotenv').config();
const sequelize = require('../config/database');
const User = require('../models/User');
const Task = require('../models/Task');
const bcrypt = require('bcryptjs');

async function initializeDatabase() {
  try {
    // Sync all models
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully');

    // Create test user
    const hashedPassword = await bcrypt.hash('test123', 10);
    const user = await User.create({
      email: 'test@example.com',
      password: hashedPassword
    });
    console.log('Test user created:', user.email);

    // Create sample tasks
    const tasks = await Task.bulkCreate([
      {
        title: 'Complete project setup',
        description: 'Set up the development environment and install dependencies',
        effort: 2,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        status: 'pending',
        UserId: user.id
      },
      {
        title: 'Implement authentication',
        description: 'Add user registration and login functionality',
        effort: 3,
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
        status: 'in_progress',
        UserId: user.id
      },
      {
        title: 'Design database schema',
        description: 'Create database tables and relationships',
        effort: 1,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        status: 'completed',
        UserId: user.id
      }
    ]);
    console.log('Sample tasks created:', tasks.length);

    console.log('Database initialization completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase(); 