import {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

import MonthsSelector from 'components/monthsSelector';
import Switch from 'components/switch/Switch';
import Text from 'components/text/Text';

interface StaticsHeaderProps {
  isMonth: boolean;
  setIsMonth: Dispatch<SetStateAction<boolean>>;
  calendarDate: Date;
  handleDatePickerPress: () => void;
}

const StaticsHeader = ({
  isMonth,
  setIsMonth,
  calendarDate,
  handleDatePickerPress,
}: StaticsHeaderProps) => {
  return (
    <Header>
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
    </Header>
  );
};

const Header = styled.div`
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

export default StaticsHeader;
