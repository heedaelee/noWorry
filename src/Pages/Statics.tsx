import PieChart from 'components/chart/PieChart';
import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';
import useCalculatePercentage from 'hooks/useCalculatePercentage';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {worryListState} from 'store/worry-list';
import styled from 'styled-components';
import {
  HorizontalPaddingWrapper,
  staticsContentsHeight,
} from 'styles/globalStyles';
import {Logger} from 'utils/logger';

const Statics = () => {
  const [isMonth, setIsMonth] = useState(false);
  const worryState = useRecoilValue(worryListState);
  const {worryList} = worryState;

  const logger = new Logger(true);
  logger.log('statics', '데이터', worryList);

  const {data, totalItemsCount, notHappenedItemCount} =
    useCalculatePercentage(worryList);
  const noData = totalItemsCount === 0; // 데이터가 없을 때

  return (
    <HorizontalPaddingWrapper>
      <StaticsHeader>
        <TitleWrapper>
          <Text type='h15'>전체</Text>
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
            <PieChart data={data} />
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
  width: 115px;
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

export default Statics;
