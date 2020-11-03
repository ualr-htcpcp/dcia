const locale = "en-US";

export function formatTimestamp(timestamp) {
  if (!timestamp) return "";

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString(locale);
  const formattedTime = date.toLocaleTimeString(locale, { timeStyle: "short" });

  return `${formattedDate} at ${formattedTime}`;
}
