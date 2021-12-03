const mongoose = require(`mongoose`);

const getMinLengthMessage = (field, length) => {
  return `Введите не менее ${length} символов в поле '${field}'`;
};

const getMaxLengthMessage = (field, length) => {
  return `Максимальная длина поля '${field}' - ${length} символов`;
};

const getRequiredText = (field) => {
  return `Поле ${field} - обязательно для заполнения`;
};

const feedbackValidOptions = {
  name: {
    type: String,
    minLength: [3, getMinLengthMessage(`name`, 3)],
    maxLength: [50, getMaxLengthMessage(`name`, 50)],
    required: [true, getRequiredText(`required`)],
  },
  contacts: {
    type: String,
    minLength: [5, getMinLengthMessage(`contacts`, 5)],
    maxLength: [200, getMaxLengthMessage(`contacts`, 200)],
    required: [true, getRequiredText(`required`)],
  },
  message: {
    type: String,
    maxLength: [2000, getMaxLengthMessage(`message`, 2000)],
    required: false,
  }
};

export const feedbackShema = new mongoose.Schema({
  name: feedbackValidOptions.name,
  contacts: feedbackValidOptions.contacts,
  message: feedbackValidOptions.message,
});
