import {feedbackShema} from "./shemas";

const mongoose = require(`mongoose`);

// INSERT PASS FROM PASS STORE
const CONNECT_MONGO_URL = `password`;

// models
export const Feedback = mongoose.model(`feedbacks`, feedbackShema);

export const addFeedbackToDatabase = async (feedback) => {
  await mongoose.connect(CONNECT_MONGO_URL);

  const feedbackData = new Feedback({
    name: feedback.name,
    contacts: feedback.contacts,
    message: feedback.message,
  });
  await feedbackData.save();

  await mongoose.disconnect();
};


