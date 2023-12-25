import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import useModals from 'hooks/useModals';
import useCalendar from 'hooks/useCalendar';
import {useChangePages} from 'hooks/useChagePages';
import useCalculatePercentage from 'hooks/useCalculatePercentage';
import useDatePickerButtonPress from 'hooks/useDatePickerButtonPress';

import {worryListState} from 'store/worry-list';
import {HorizontalPaddingWrapper} from 'styles/globalStyles';
import {isPro} from 'utils/isDev';
import {Logger} from 'utils/logger';

import StaticsContents from './StaticsContents';
import StaticsHeader from './StaticsHeader';

const Statics = () => {
  const [isMonth, setIsMonth] = useState(false);
  const {closeModal, openModal} = useModals();
  const worryState = useRecoilValue(worryListState);
  const {worryList} = worryState;
  const logger = new Logger((isPro && false) || true);
  const {calendarDate, setCalendaDate, worryListFiltered} = useCalendar({
    worryList,
  });
  const [pages, setPages] = useChangePages();

  const {handleDatePickerPress} = useDatePickerButtonPress({
    openModal,
    closeModal,
    setCalendaDate,
  });

  useEffect(() => {
    /* 유저가 백버튼이 아닌 안드로이드서 제공되는 백키를눌렀을때 pages 변수 조정
     */
    pages !== 'statics' && setPages('statics');
  }, [pages, setPages]);

  const {dataForChart, totalItemsCount, notHappenedItemCount} =
    useCalculatePercentage(isMonth ? worryListFiltered : worryList);
  logger.log('statics', 'dataForChart', dataForChart);

  const noData = totalItemsCount === 0; // 데이터가 없을 때
  const handlePressLink = () => {
    setPages('list');
  };

  return (
    <HorizontalPaddingWrapper>
      <StaticsHeader
        isMonth={isMonth}
        setIsMonth={setIsMonth}
        calendarDate={calendarDate}
        handleDatePickerPress={handleDatePickerPress}
      />
      <StaticsContents
        noData={noData}
        totalItemsCount={totalItemsCount}
        notHappenedItemCount={notHappenedItemCount}
        handlePressLink={handlePressLink}
        dataForChart={dataForChart}
      />
    </HorizontalPaddingWrapper>
  );
};

export default Statics;
