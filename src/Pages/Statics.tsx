import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';
import styled from 'styled-components';
import {
  HeightBetweenHeaderAndContents,
  HorizontalPaddingWrapper,
} from 'styles/globalStyles';

const Statics = () => {
  return (
    <HorizontalPaddingWrapper>
      <StaticsHeader>
        <TitleWrapper>
          <Text type='h15'>전체</Text>
        </TitleWrapper>
        <SwitchWrapper>
          <Switch menuText={['전체', '월별']} />
        </SwitchWrapper>
      </StaticsHeader>
    </HorizontalPaddingWrapper>
  );
};

const StaticsHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: ${HeightBetweenHeaderAndContents}px;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 25px 0px;
  border: 1px solid black;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SwitchWrapper = styled.div`
  position: absolute;
  top: 21px;
  right: 16px;
  width: 107px;
  height: 38px;
  border: 1px solid black;
`;

export default Statics;
