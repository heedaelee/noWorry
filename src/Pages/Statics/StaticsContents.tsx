import {IoIosInformationCircleOutline} from '@react-icons/all-files/io/IoIosInformationCircleOutline';
import styled from 'styled-components';

import PieChart, {PieChartProps} from 'components/chart/PieChart';
import Text from 'components/text/Text';
import {GlobalStyles, staticsContentsHeight} from 'styles/globalStyles';

interface StaticsContentsProps {
  noData: boolean;
  totalItemsCount: number;
  notHappenedItemCount: number;
  handlePressLink: () => void;
  dataForChart: PieChartProps['data'];
}

const StaticsContents = ({
  noData,
  totalItemsCount,
  notHappenedItemCount,
  handlePressLink,
  dataForChart,
}: StaticsContentsProps) => {
  return (
    <Contents>
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
    </Contents>
  );
};

const Contents = styled.div`
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
export default StaticsContents;
