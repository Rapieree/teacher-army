const feedbackModel = {
  name: 50,
  contacts: 200,
  message: 2000,
};

const checkKeysObjects = (obj, objModel) => {
  const keysObj = Object.keys(obj);
  const keysModel = Object.keys(objModel);

  if (keysObj.length !== keysModel.length) {
    return false;
  }

  for (let key of keysModel) {
    if (!keysObj.includes(key)) {
      return false;
    }
  }

  return true;
};

const checkPropsLengths = (obj, sizeMap) => {
  for (let key in obj) {
    if (obj[key].length > Number(sizeMap[key])) {
      return false;
    }
  }

  return true;
};

export const feedbackValidator = (feedbackData) => {
  return (
    checkKeysObjects(feedbackData, feedbackModel) && checkPropsLengths(feedbackData, feedbackModel)
      ? true
      : false
  );
};
