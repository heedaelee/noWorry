import {useState, useMemo} from 'react';
import {WorryList} from 'types/common';
import {compareMonth} from 'utils/data';

interface useCalendarProps {
  worryList: WorryList;
}

const useCalendar = ({worryList}: useCalendarProps) => {
  const [calendarDate, setCalendaDate] = useState(new Date());

  const worryListFiltered = useMemo(
    () =>
      worryList.filter(v => {
        if (compareMonth(calendarDate, v.worryExpectedDate as Date)) {
          return v;
        }
      }),
    [calendarDate, worryList],
  );

  return {calendarDate, setCalendaDate, worryListFiltered};
};

export default useCalendar;
