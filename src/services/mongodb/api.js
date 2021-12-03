import {feedbackShema} from "./shemas";

const mongoose = require(`mongoose`);

// INSERT PASS FROM PASS STORE
const CONNECT_MONGO_URL = `password`;

// models
let Feedback;
try {
  Feedback = mongoose.model(`feedbacks`, feedbackShema);
} catch (e) {
  Feedback = mongoose.model(`feedbacks`);
}

export {Feedback};

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
