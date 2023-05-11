export const setFields = (obj, changingSymbol) => {
  if (Array.isArray(obj)) {
    obj.map((field) => {
      for (let key in field) {
        field[key] = field[key] ?? changingSymbol;
      }
    });
  } else {
    for (let key in obj) {
      obj[key] = obj[key] ?? changingSymbol;
    }
  }
  return obj;
};
