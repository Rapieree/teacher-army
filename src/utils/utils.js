export const getMinLengthValidationShemaProp = (field, length) => {
  return [length, `Введите не менее ${length} символов в поле '${field}'`];
};

export const getMaxLengthValidationShemaProp = (field, length) => {
  return [length, `Максимальная длина поля '${field}' - ${length} символов`];
};

export const getRequiredValidationShemaProp = (field, isRequired) => {
  return [isRequired, `Поле ${field} - обязательно для заполнения`];
};
