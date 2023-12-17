import useCalculatePercentage from 'hooks/useCalculatePercentage';
import useCalendar from 'hooks/useCalendar';
import {useChangePages} from 'hooks/useChagePages';
import useDatePickerButtonPress from 'hooks/useDatePickerButtonPress';
import useModals from 'hooks/useModals';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
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
  logger.log('statics', '필터된 데이터', worryListFiltered);

  const {handleDatePickerPress} = useDatePickerButtonPress({
    openModal,
    closeModal,
    setCalendaDate,
  });

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
