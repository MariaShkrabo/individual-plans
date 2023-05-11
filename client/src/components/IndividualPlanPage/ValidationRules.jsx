const required = (attributeName) => ({
  required: {
    value: true,
    message: `${attributeName} - это обязательное поле!`,
  },
});

export const hoursValidation = {
  ...required("Часы"),
  min: {
    value: 0,
    message: "Минимальное допустимое значение - 0!",
  },
};

export const nameWorkValidation = {
  ...required("Наименование работ"),
};
