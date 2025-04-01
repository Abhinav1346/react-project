import mongoose from 'mongoose';
import config from './config.js';

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(config.db.MONGODB_URI);
    console.log('MONGODB CONNECTED');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect ;