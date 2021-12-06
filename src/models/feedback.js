import {getMaxLengthValidationShemaProp, getMinLengthValidationShemaProp, getRequiredValidationShemaProp} from "../utils/utils";
import mongoose from "mongoose";


const feedbackValidOptions = {
  name: {
    type: String,
    minLength: getMinLengthValidationShemaProp(`name`, 1),
    maxLength: getMaxLengthValidationShemaProp(`name`, 50),
    required: getRequiredValidationShemaProp(`name`, true),
  },
  contacts: {
    type: String,
    minLength: getMinLengthValidationShemaProp(`contacts`, 1),
    maxLength: getMaxLengthValidationShemaProp(`contacts`, 200),
    required: getRequiredValidationShemaProp(`contacts`, true),
  },
  message: {
    type: String,
    maxLength: getMaxLengthValidationShemaProp(`message`, 2000),
    required: false,
  }
};

const feedbackShema = new mongoose.Schema({
  name: feedbackValidOptions.name,
  contacts: feedbackValidOptions.contacts,
  message: feedbackValidOptions.message,
});

const Feedback = mongoose.models.Feedback || mongoose.model(`feedback`, feedbackShema);

export default Feedback;
