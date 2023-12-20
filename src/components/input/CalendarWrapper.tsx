import {useState, useRef, useEffect} from 'react';
import Text from 'components/text/Text';
import {InitialValue, handleDateChangeType} from 'hooks/useForm';
import {useOutsideClick} from 'hooks/useOutsideClick';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import {fullDayFormat} from 'utils/data';
import {GlobalStyles} from 'styles/globalStyles';
import {useRecoilValue} from 'recoil';
import {pagesState} from 'store/pages';

interface CalendarWrapperProps {
  handleDateChange: handleDateChangeType;
  values: InitialValue;
}

const CalendarWrapper = ({handleDateChange, values}: CalendarWrapperProps) => {
  const currentPage = useRecoilValue(pagesState);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [showCalendar, setShowCalendar] = useOutsideClick(calendarRef, false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    /* 수정페이지에서, 걱정예상기간이 비어있다면 */
    if (currentPage === 'editor' && values.worryExpectedDate === '') {
      setIsChecked(true);
    }
  }, [currentPage, values.worryExpectedDate]);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleCheckboxChange = (handleDateChange: handleDateChangeType) => {
    handleDateChange('');
    setIsChecked(!isChecked);
  };
  return (
    <>
      {/* 캘린더 */}
      <CalendarButtonWrapper ref={calendarRef}>
        <CalendarButton disabled={isChecked} onClick={handleToggleCalendar}>
          {values.worryExpectedDate
            ? `${fullDayFormat(values.worryExpectedDate)}`
            : '날짜 선택하기 (클릭)'}
        </CalendarButton>
        {showCalendar && (
          <CalendarApsolute>
            <Calendar
              value={new Date()}
              onChange={(value, e) => {
                value !== null && handleDateChange(new Date(value.toString()));
              }}
              onClickDay={handleToggleCalendar}
            />
          </CalendarApsolute>
        )}
      </CalendarButtonWrapper>
      {/* 체크박스 */}
      <CheckBoxWrapper onClick={() => handleCheckboxChange(handleDateChange)}>
        <CheckBoxStyled
          type='checkbox'
          onChange={() => {}}
          checked={isChecked}
        />
        <Text type='body2'>아직 모르겠어요</Text>
      </CheckBoxWrapper>
    </>
  );
};

const CalendarButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CalendarButton = styled.button`
  height: 17px;
  display: flex;
  padding: 8px;
  border: 1px solid ${GlobalStyles.Colors.lightGrray};
  border-radius: 8px;
  font-family: 'monospace';
  background-color: ${({disabled}) =>
    disabled ? GlobalStyles.Colors.lightGrray : 'white'};
  color: rgb(152, 153, 155);
  text-align: left;
`;
const CalendarApsolute = styled.div`
  position: absolute;
  top: 38px;
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const CheckBoxStyled = styled.input`
  margin-right: 5px;
`;
export default CalendarWrapper;
