import {Dispatch, SetStateAction, useCallback, useState, useMemo} from 'react';
import {WorryItem, WorryList, WorryStatus, sortMenuType} from 'types/common';

type useFilterType = (
  worryList: WorryList,
) => [
  WorryStatus,
  Dispatch<SetStateAction<WorryStatus>>,
  sortMenuType,
  Dispatch<SetStateAction<sortMenuType>>,
  WorryItem[],
];

const useFilter: useFilterType = worryList => {
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');
  const [sortState, setSortState] = useState<sortMenuType>('최근 작성순');

  /* stauts에 따른 fiter */
  const worryListFiltered = useMemo(
    () => worryList.filter(v => v.worryStatus === filterState),
    [filterState, worryList],
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
          +new Date(a.worryExpectedDate) - +new Date(b.worryExpectedDate),
      )
      .concat(hasNotExpectedDateList);
  }

  return [
    filterState,
    setFilterState,
    sortState,
    setSortState,
    worryListCompleted,
  ];
};

export default useFilter;
