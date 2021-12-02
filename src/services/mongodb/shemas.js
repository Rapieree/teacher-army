const mongoose = require(`mongoose`);

export const feedbackShema = new mongoose.Schema({
  name: String,
  contacts: String,
  message: String,
});
