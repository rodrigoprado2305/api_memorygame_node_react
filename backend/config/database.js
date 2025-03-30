const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { // Updated here
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'DB_Rod',
    });
    console.log('MongoDB connected... ', process.env.MONGODB_URI);
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
