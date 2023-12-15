import styled from 'styled-components';
import {monthWrapper} from 'styles/globalStyles';
import MonthsSelector from 'components/monthsSelector/index';

interface MonthsProps {
  calendarDate: Date;
  handleDatePickerPress: () => void;
}

const Months = ({calendarDate, handleDatePickerPress}: MonthsProps) => {
  return (
    <Wrapper>
      <MonthsSelector
        calendarDate={calendarDate}
        handleDatePickerPress={handleDatePickerPress}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${monthWrapper}px;
`;

export default Months;
