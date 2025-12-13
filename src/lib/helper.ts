export const formatDate = (dateStr: string, locale: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat("id", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
