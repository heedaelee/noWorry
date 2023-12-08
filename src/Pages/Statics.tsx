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
    id: 'A',
    value: 33,
  },
  {
    id: 'B',
    value: 67,
  },
];

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
          <Text type='sub1'>걱정이 일어나지 않을 확률</Text>
          <GraphWrapper>
            <ResponsivePie
              data={data}
              startAngle={-90}
              endAngle={90}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{scheme: 'nivo'}}
              borderWidth={1}
              borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
              animate={true}
            />
          </GraphWrapper>
          <Text
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
  padding: 40px var(--space-0, 0px);
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;
const GraphWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Statics;
