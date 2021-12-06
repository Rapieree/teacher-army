import mongoose from 'mongoose';

// INSERT PASS FROM PASS STORE
const CONNECT_MONGO_URL = `password`;

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(CONNECT_MONGO_URL);
  return handler(req, res);
};

export default connectDB;
