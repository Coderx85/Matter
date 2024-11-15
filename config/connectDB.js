import mongoose from 'mongoose';

let isConnected = false;
const mongooseUri = process.env.MONGO_URI;

export const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return;
  }

  try {
    await mongoose.connect(mongooseUri);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: \n', mongoose.Error);
  }
}