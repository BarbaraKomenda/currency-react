import { useCurrentDate } from "./useCurrentDate";
import { Clock } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const Time = () => {
  const date = useCurrentDate();

  return <Clock>Today is {formatDate(date)}</Clock>;
};
