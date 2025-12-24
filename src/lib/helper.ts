import { Locale } from "./datas/global";

export const formatDate = (dateStr: string, locale: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
