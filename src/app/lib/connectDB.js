import mongoose from 'mongoose';

const validUsername = process.env.USER;
const validPassword = process.env.PASSWORD;

const MONGODB_URI = `mongodb+srv://${validUsername}:${validPassword}@cluster0.peh4c.mongodb.net/portfollioBD?retryWrites=true&w=majority&appName=Cluster0`;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (mongoose.connections[0].readyState) {
      return mongoose.connections[0]; 
    }
  
    try {
      await mongoose.connect(MONGODB_URI);
  
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      throw new Error('Database connection failed');
    }
  }
  
  export default connectDB;
  