export function formatDate(date: Date, format: string): string {
  return format
    .replace(/YYYY/g, date.getFullYear().toString())
    .replace(/MM/g, String(date.getMonth() + 1).padStart(2, '0'))
    .replace(/DD/g, String(date.getDate()).padStart(2, '0'));
}

export function formatTime(date: Date, format: string, is24: boolean = true): string {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  if (!is24) hours = hours % 12 || 12;

  return format
    .replace(/HH/g, String(hours).padStart(2, '0')) // 24-hour uppercase
    .replace(/hh/g, String(hours).padStart(2, '0')) // 12-hour lowercase
    .replace(/mm/g, minutes)                        // minutes lowercase
    .replace(/MM/g, minutes)                        // minutes uppercase (optional)
    .replace(/ss/g, seconds)
    .replace(/SS/g, seconds)                        // seconds uppercase (optional)
    .replace(/a/g, ampm.toLowerCase())              // am/pm lowercase
    .replace(/A/g, ampm);                           // AM/PM uppercase
}
