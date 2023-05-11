import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (date, template) => {
  return format(new Date(date), template, {
    locale: ru,
  });
};
