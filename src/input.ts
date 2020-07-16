export type Shift = {
  start: string;
  end: string;
};

export const parseInput = (shiftData: string): Shift[] => {
  const shifts: Shift[] = [];
  if (shiftData.length === 0) return shifts;
  const shiftDataLines = shiftData.split('\n');
  shiftDataLines.forEach(shiftLine => {
    const [date, start, end] = shiftLine.split(',');
    if (date && start && end) {
      const [day, month, year] = date.split('/');
      const startDateTime = `${year}${month}${day}T${start}00`;
      const endDateTime = `${year}${month}${day}T${end}00`;
      shifts.push({start: startDateTime, end: endDateTime});
    }
  });
  return shifts;
};
