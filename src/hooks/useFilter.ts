import {Dispatch, SetStateAction, useState, useMemo} from 'react';

import {
  DateType,
  WorryItem,
  WorryList,
  WorryStatus,
  sortMenuType,
} from 'types/common';
import {compareMonth} from 'utils/data';

type useFilterType = (
  worryList: WorryList,
) => [
  WorryStatus,
  Dispatch<SetStateAction<WorryStatus>>,
  sortMenuType,
  Dispatch<SetStateAction<sortMenuType>>,
  Date,
  Dispatch<SetStateAction<Date>>,
  WorryItem[],
];

const useFilter: useFilterType = worryList => {
  /* filter */
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');
  /*  sort   */
  const [sortState, setSortState] = useState<sortMenuType>('최근 작성순');
  /* calendar */
  const [calendarDate, setCalendaDate] = useState(new Date());

  /* stauts와 월별에 따른 fiter */
  const worryListFiltered = useMemo(
    () =>
      worryList.filter(v => {
        if (v.worryStatus === filterState) {
          if (compareMonth(calendarDate, v.regDate as Date)) {
            return v;
          }
        }
      }),
    [calendarDate, filterState, worryList],
  );

  let worryListCompleted = worryListFiltered;
  if (sortState === '최근 작성순') {
    /* 내림차순 */
    worryListCompleted = worryListFiltered.sort(
      (a, b) => +new Date(b.regDate) - +new Date(a.regDate),
    );
  } else if (sortState === '예상날짜 빠른순') {
    /* 예상일이 없는경우 */
    const hasExpectedDateList = worryListFiltered.filter(
      v => v.worryExpectedDate !== '',
    );
    /* 예상일이 있는경우 */
    const hasNotExpectedDateList = worryListFiltered.filter(
      v => v.worryExpectedDate === '',
    );
    // 오름차순, 맨 뒤에 없는 케이스의 배열을 붙인다.
    worryListCompleted = hasExpectedDateList
      .sort(
        (a, b) =>
          +new Date(a.worryExpectedDate as DateType) -
          +new Date(b.worryExpectedDate as DateType),
      )
      .concat(hasNotExpectedDateList);
  }

  return [
    filterState,
    setFilterState,
    sortState,
    setSortState,
    calendarDate,
    setCalendaDate,
    worryListCompleted,
  ];
};

export default useFilter;
