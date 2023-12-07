import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';
import {useState} from 'react';
import styled from 'styled-components';
import {HorizontalPaddingWrapper} from 'styles/globalStyles';

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
      <StaticsContents></StaticsContents>
    </HorizontalPaddingWrapper>
  );
};

const StaticsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px 0px;
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
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Statics;
