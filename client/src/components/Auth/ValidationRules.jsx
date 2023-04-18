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

export const confirmationValidation = {
  ...passwordValidation,
  required: {
    value: true,
    message: "Пожалуйста, подтвертите пароль",
  },
};

export const surnameValidation = {
  ...required("Фамилия"),
};

export const nameValidation = {
  ...required("Имя"),
};

export const facultyValidation = {
  ...required("Факультет"),
};

export const cathedraValidation = {
  ...required("Кафедра"),
};

export const positionValidation = {
  ...required("Должность"),
};

export const defaultLoginValues = {
  login: "",
  password: "",
};

export const defaultRegistrationValues = {
  login: "",
  password: "",
  confirmation: "",
  surname: "",
  name: "",
  fatherName: "",
  faculty: "",
  cathedra: "",
  position: "",
  academicTitle: "",
  academicDegree: "",
  employmentDate: "",
};
