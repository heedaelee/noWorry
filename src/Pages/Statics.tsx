import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';
import {useState} from 'react';
import styled from 'styled-components';
import {
  HorizontalPaddingWrapper,
  staticsContentsHeight,
} from 'styles/globalStyles';
import {ResponsivePie} from '@nivo/pie';

const data = [
  {
    id: '1',
    value: '95.0',
    color: '#2663D6',
  },
  {
    id: '2',
    value: 10,
    color: '#CCCCCC',
  },
];
const colors = ['#2663D6', '#CCCCCC']; // 90%의 세그먼트와 나머지 세그먼트의 색상

const Statics = () => {
  const [isMonth, setIsMonth] = useState(false);
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
            <ResponsivePie
              data={data}
              // margin={{top: 0, right: 80, bottom: 80, left: 80}}
              startAngle={90}
              endAngle={-90}
              sortByValue={true}
              innerRadius={0.85}
              colors={colors}
              enableArcLinkLabels={false}
              enableArcLabels={false}
              animate={true}
              tooltip={() => null}
            />
            <div
              style={{
                marginTop: '-44px',
                fontSize: '44px',
                fontStyle: 'normal',
                fontWeight: 200,
                textAlign: 'center',
              }}>
              {`${data[0].value}%`}
            </div>
          </GraphWrapper>
          <Text
            color='#222222'
            style={{
              whiteSpace: 'pre-wrap',
            }}
            type='sub1'>{`통계를 낼 수 있는\n기록이 없어요!`}</Text>
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
