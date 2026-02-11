import moment from "moment-timezone";
import { useSession } from "next-auth/react";

// export function getLocalTimeInZone(
//   time: any,
//   timeZone?: any,
//   formatType: "datetime" | "date" | "time" = "datetime"
// ) {
//   if (!time) return "-";

//   let format = "YYYY-MM-DD HH:mm:ss"; // default (full date + time)

//   if (formatType === "date") {
//     format = "YYYY-MM-DD";
//   } else if (formatType === "time") {
//     format = "HH:mm:ss";
//   }

//   return moment.tz(time, timeZone).format(format);
// }

export function getLocalTimeInZone(
  time: any,
  timeZone = "UTC",
  formatType: "datetime" | "date" | "time" = "datetime"
) {
  if (!time) return "-";

  let format = "YYYY-MM-DD HH:mm:ss";
  if (formatType === "date") format = "YYYY-MM-DD";
  else if (formatType === "time") format = "HH:mm:ss";

  // Interpret input as UTC and convert to the target time zone
  return moment.utc(time).tz(timeZone).format(format);
}
