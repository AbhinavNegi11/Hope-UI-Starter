export function validateDateRangeEnv(
  startDate: string | Date,
  endDate: string | Date
): { isValid: boolean; diffMonths: number; maxMonths: number } {
  const maxMonths = 3;

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  return { isValid: diffMonths <= maxMonths, diffMonths, maxMonths };
}
