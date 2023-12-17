import PieChart from 'components/chart/PieChart';
import {IoIosInformationCircleOutline} from '@react-icons/all-files/io/IoIosInformationCircleOutline';
import MonthsSelector from 'components/monthsSelector';
import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';
import useCalculatePercentage from 'hooks/useCalculatePercentage';
import useCalendar from 'hooks/useCalendar';
import {useChangePages} from 'hooks/useChagePages';
import useDatePickerButtonPress from 'hooks/useDatePickerButtonPress';
import useModals from 'hooks/useModals';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {worryListState} from 'store/worry-list';
import styled from 'styled-components';
import {
  GlobalStyles,
  HorizontalPaddingWrapper,
  staticsContentsHeight,
} from 'styles/globalStyles';
import {Logger} from 'utils/logger';
import {isDev, isPro} from 'utils/isDev';

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
      <StaticsHeader>
        <TitleWrapper>
          {isMonth ? (
            <MonthsSelector
              calendarDate={calendarDate}
              handleDatePickerPress={handleDatePickerPress}
            />
          ) : (
            <Text type='h2'>전체</Text>
          )}
        </TitleWrapper>
        <SwitchWrapper>
          <Switch
            menuText={['전체', '월간']}
            active={isMonth}
            setActive={setIsMonth}
          />
        </SwitchWrapper>
      </StaticsHeader>
      <StaticsContents>
        <ContentsWrapper>
          <Text color='#222222' type='sub1'>
            걱정이 일어나지 않을 확률
          </Text>
          <GraphWrapper>
            {/* 모듈화 */}
            <PieChart data={dataForChart} totalItemsCount={totalItemsCount} />
          </GraphWrapper>
          <Text
            color='#222222'
            style={{
              whiteSpace: 'pre-wrap',
            }}
            type='sub1'>
            {noData
              ? `통계를 낼 수 있는\n기록이 없어요!`
              : `총 ${totalItemsCount}개의 걱정 중\n${notHappenedItemCount}개는일어나지 않을 확률이에요!`}
          </Text>
        </ContentsWrapper>
        <BottomTextWrapper>
          <IconWrapper>
            <IoIosInformationCircleOutline
              size={20}
              color={GlobalStyles.Colors.gray}
            />
          </IconWrapper>
          <TextWrapper>
            <Text
              type='sub2'
              style={{
                whiteSpace: 'pre-wrap',
                display: 'inline',
                color: '#505869',
              }}>{`걱정한 일의 결과가 체크되지 않은 걱정은 통계에서\n제외돼요`}</Text>
            <TextLinked onClick={handlePressLink}>체크하기</TextLinked>
          </TextWrapper>
        </BottomTextWrapper>
      </StaticsContents>
    </HorizontalPaddingWrapper>
  );
};

const StaticsHeader = styled.div`
  position: relative;
  margin: 15px 0px 35px 0px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SwitchWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 0px;
  width: 110px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StaticsContents = styled.div`
  width: 358px;
  height: ${staticsContentsHeight}px;
  display: flex;
  flex-direction: column;
`;
const ContentsWrapper = styled.div`
  height: 262px;
  width: 358px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 40px 0px 20px 0px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const GraphWrapper = styled.div`
  width: 226px;
  height: 113px;
  position: relative;
`;
const BottomTextWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
`;
const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
`;
const TextWrapper = styled.div`
  flex: 9;
`;
const TextLinked = styled.div`
  color: #1a6dff;
  margin-left: 5px;
  font-size: 14px;
  font-family: ${GlobalStyles.fontFamilyType.medium};
  display: inline;
`;

export default Statics;
