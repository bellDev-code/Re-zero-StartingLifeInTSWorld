export function randomDate(start: Date, end: Date) {
  // timestamp unix 1650177980
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
