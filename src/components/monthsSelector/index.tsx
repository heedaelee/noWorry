import Text from 'components/text/Text';
import {FaChevronDown} from '@react-icons/all-files/fa/FaChevronDown';
import styled from 'styled-components';
import {yearMonth} from 'utils/data';

interface MonthsSelectorProps {
  handleDatePickerPress: () => void;
  calendarDate: Date;
  wrapperStyle?: React.CSSProperties;
}

const MonthsSelector = ({
  calendarDate,
  handleDatePickerPress,
  wrapperStyle,
}: MonthsSelectorProps) => {
  return (
    <Wrapper onClick={handleDatePickerPress} style={wrapperStyle}>
      <Text style={{marginRight: 10}} type='h2'>
        {yearMonth(calendarDate)}
      </Text>
      <FaChevronDown size={12} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
`;

export default MonthsSelector;
