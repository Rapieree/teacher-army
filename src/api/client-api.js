const throwHttpError = (errorMessage) => {
  const httpError = new Error();
  httpError.message = errorMessage;

  throw httpError;
};

export const sendFeedback = async ({name, contacts, message}) => {
  const response = await fetch(`/api/subscribe`, {
    body: JSON.stringify({
      name,
      contacts,
      message,
    }),
    headers: {
      [`Content-Type`]: `application/json`,
    },
    method: `POST`,
  });

  if (response.ok) {
    return true;
  }

  const errorMessage = await response.json();

  return throwHttpError(errorMessage.error);
};
