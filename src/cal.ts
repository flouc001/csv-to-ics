import {Shift} from './input';

const wrapWithCalendarMeta = (events: string) => `
PRODID:github.com/flouc001/shift-ics
VERSION:2.0
BEGIN:VCALENDAR
${events}
END:VCALENDAR
`;

export const parseToCal = (eventName: string, shifts: Shift[]): string => {
  const parsedEvents = shifts
    .map(({start, end}, index) => {
      // TODO: make this truly unique
      return [
        'BEGIN:VEVENT',
        `UID:${index}-generatedShift`,
        `DSTAMP:${start}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${eventName}`,
        'END:VEVENT',
      ].join('\n');
    })
    .join('\n');

  return wrapWithCalendarMeta(parsedEvents);
};
