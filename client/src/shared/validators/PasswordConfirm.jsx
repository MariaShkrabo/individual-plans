const validateConfirmPassword = password => passwordConfirmation => {
  if (passwordConfirmation !== password) {
    return `Пароль не подтвёрждён!`
  }
};

export default validateConfirmPassword;
