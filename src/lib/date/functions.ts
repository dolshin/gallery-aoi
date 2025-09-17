import { DEFAULT_DATETIME_FORMAT_OPTION } from "./constants";

export const formatDate = (
  date: string | null,
  option: Intl.DateTimeFormatOptions = DEFAULT_DATETIME_FORMAT_OPTION,
) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("ja-JP", option);
};

export const formatDateToDottedDate = (date: string | null) => {
  if (!date) return "";
  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  return `${year}.${month}.${day}`;
};
