import {Dispatch, SetStateAction, useCallback, useState, useMemo} from 'react';
import {WorryItem, WorryList, WorryStatus} from 'types/common';

type useFilterType = (
  worryList: WorryList,
) => [WorryStatus, Dispatch<SetStateAction<WorryStatus>>, WorryItem[]];

const useFilter: useFilterType = worryList => {
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');

  const worryListFiltered = useMemo(
    () => worryList.filter(v => v.worryStatus === filterState),
    [filterState, worryList],
  );

  return [filterState, setFilterState, worryListFiltered];
};

export default useFilter;
