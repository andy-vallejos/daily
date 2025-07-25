import { useState } from 'react';
import dayjs from 'dayjs';
import { useCalendar } from './useCalendar';
import './Calendar.css';


export const Calendar = () => {
  const dayPrompts = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const [currentDate, setCurrentDate] = useState(dayjs());
  const days = useCalendar(currentDate);

  const goToPreviousMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const goToNextMonth = () => setCurrentDate(currentDate.add(1, 'month'));
 

  return (
    <div className='calendar'>
      <section className='calendar__inf'>
        <h1>
          {currentDate.format('MMMM YYYY')}
        </h1>
        <section className="calendar__inf--buttons">
            <button onClick={goToPreviousMonth}><img src="/back.png" alt="" /></button>
            <button onClick={goToNextMonth}><img src="/forward.png" alt="" /></button>
        </section>
      </section>

      <section className='calendar__prompts'>
        {dayPrompts.map((d) => (
          <h1 key={d}>{d}</h1>
        ))}
      </section>

      <section className='calendar__days'>
        {days.map((day) => {
          const isCurrentMonth = day.month() === currentDate.month();
          return (
            <div
              key={day.toString()}
              className={isCurrentMonth ? 'current-month' : 'other-month'}
            >
              {day.format('DD')}
            </div>
          );
        })}
      </section>
    </div>
  );
};
