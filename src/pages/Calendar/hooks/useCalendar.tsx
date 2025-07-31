import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';


export const useCalendar = (currentDate: Dayjs) => {
     const [days, setDays] = useState<Dayjs[]>([]);

    useEffect(() => {
      const startOfMonth = currentDate.startOf('month');
      const startDayIndex = startOfMonth.day(); 

      console.log(dayjs())

      const calendarStart = startOfMonth.subtract(startDayIndex, 'day');

      const tempDays: Dayjs[] = [];
      for (let i = 0; i < 42; i++) {
        tempDays.push(calendarStart.add(i, 'day'));
      }

      setDays(tempDays);
    }, [currentDate]);
      return days;
}
