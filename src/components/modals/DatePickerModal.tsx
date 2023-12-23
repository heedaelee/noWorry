import {MouseEventHandler, useState} from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

import Modal from './Modal';
import Text from 'components/text/Text';
import Button from './Button';
import Calendar from 'react-calendar';
import {GlobalStyles} from 'styles/globalStyles';

interface DatePickerModalProps {
  open: boolean;
  message: string;
  onConfirmButtonClick: (date: Date) => void;
  onCancelButtonClick: () => void;
}

const DatePickerModal = ({
  message,
  open,
  onCancelButtonClick,
  onConfirmButtonClick,
}: DatePickerModalProps) => {
  const [date, setDate] = useState(new Date());

  const handleConfirm = () => {
    // 확인 버튼
    onConfirmButtonClick(date);
    onCancelButtonClick();
  };

  const handleSelect = (time: Date) => {
    setDate(time);
  };

  const handleCancel = () => {
    // 취소 버튼
    onCancelButtonClick();
  };

  const handleStopPropagation: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  return (
    <Modal isVisible={open} closeModal={onCancelButtonClick}>
      <Wrapper onClick={handleStopPropagation}>
        <QuestionWrapper>
          <Text type={'sub1'}>{message}</Text>
        </QuestionWrapper>
        <DatePickerWrapper>
          <StyledCalendar
            view='year'
            locale={'KO'}
            value={new Date()}
            onClickMonth={(value, e) => {
              handleSelect(value);
            }}
            formatMonth={(locale, date) => {
              return `${date.getMonth() + 1}월`;
            }}
            formatMonthYear={(locale, date) => {
              return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
            }}
          />
        </DatePickerWrapper>
        <ButtonRow>
          <Button onClick={handleCancel} text='취소' type='cancel' />
          <Button onClick={handleConfirm} text='확인' type='confirm' />
        </ButtonRow>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  border-radius: 20px;
  gap: 30px;
  padding: 20px 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
const QuestionWrapper = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  white-space: pre-wrap;
`;
const ButtonRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  white-space: pre-wrap;
  width: 100%;
`;
const DatePickerWrapper = styled.div`
  flex: 2;
  display: flex;
  width: 100%;
  border: none;
`;

const StyledCalendar = styled(Calendar)`
  & {
    border: none;
  }
  /* .react-calendar {
    border: none;
  } */
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 11px;
    align-items: center;
    padding: 0px 20px;
  }
  .react-calendar__navigation button {
    width: 24px;
    height: 24px;
    background: none;
    text-align: left;
  }
  .react-calendar__navigation__label__labelText--from {
    font-size: 18px;
    font-weight: 700;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  /* 이전 버튼 */
  .react-calendar__navigation__prev-button {
    position: absolute;
    right: 61px;
    font-size: 0;

    &::before {
      display: block;
      width: 10px;
      height: 10px;
      border-top: 2px solid #5f44ff;
      border-right: 2px solid #5f44ff;
      transform: rotate(225deg);
      content: '';
    }
  }
  .react-calendar__navigation__next-button {
    position: absolute;
    right: 28px;
    font-size: 0;

    &::before {
      display: block;
      width: 10px;
      height: 10px;
      border-top: 2px solid #8674e9;
      border-right: 2px solid #5f44ff;
      transform: rotate(45deg);
      content: '';
    }
  }
  .react-calendar__tile {
    font-size: 18px;
    padding: 1em 0.5em;
    border: none;
    text-align: center;
  }
  .react-calendar__tile--now {
    background-color: #2663d657;
    color: white;
    border-radius: 5px;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${GlobalStyles.Colors.blue};
    color: white;
    border-radius: 5px;
  }
`;
export default DatePickerModal;
