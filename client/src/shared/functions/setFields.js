export const setFields = (obj, changingSymbol) => {
  for (let key in obj) {
    if (!obj[key]) {
      obj[key] = changingSymbol;
    }
  }
  return obj;
};
