/**
 * Session slot picker — students choose a date and a time slot before
 * registering (replaces the fixed-date countdown model).
 * All times are IST (Asia/Kolkata). Shared by client form + server validation.
 */

/** Two fixed slots per day. Stored verbatim in NocoDB `slot_time`. */
export const slotTimes = [
  "2:00 PM – 4:00 PM IST",
  "5:00 PM – 7:00 PM IST",
] as const;
export type SlotTime = (typeof slotTimes)[number];

const IST_DATE = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** `YYYY-MM-DD` for a Date, evaluated in IST. */
function toIstDateValue(date: Date): string {
  return IST_DATE.format(date);
}

/**
 * Earliest bookable date: tomorrow in IST.
 * Today is excluded so a slot is never bookable after it has started.
 */
export function getEarliestSlotDate(): string {
  const dayMs = 24 * 60 * 60 * 1000;
  return toIstDateValue(new Date(Date.now() + dayMs));
}

/** Server-safe check: any calendar date from tomorrow onward (IST). */
export function isSelectableSlotDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  return value >= getEarliestSlotDate();
}
