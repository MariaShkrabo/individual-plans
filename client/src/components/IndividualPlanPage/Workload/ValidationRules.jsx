const required = (attributeName) => ({
  required: {
    value: true,
    message: `${attributeName} - это обязательное поле!`,
  },
});

export const loginValidation = {
  ...required("Логин"),
  minLength: {
    value: 6,
    message: "Логин должен содержать более 5 символов!",
  },
  maxLength: {
    value: 20,
    message: "Логин должен содержать менее 30 символов!",
  },
};

export const passwordValidation = {
  ...required("Пароль"),
  minLength: {
    value: 6,
    message: "Пароль должен содержать более 5 символов!",
  },
  maxLength: {
    value: 20,
    message: "Пароль должен содержать менее 20 символов!",
  },
};

export const disciplineValidation = {
  ...required("Дисциплина"),
};
