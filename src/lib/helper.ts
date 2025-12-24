import { Locale } from "./datas/global";

export const formatDate = (dateStr: string, locale: Locale): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
