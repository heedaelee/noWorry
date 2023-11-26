import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import Text from 'components/text/Text';
import formConstant from 'constants/form-constant';
import useForm, {handleDateChangeType} from 'hooks/useForm';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {useRef, useState} from 'react';
import {GlobalStyles} from 'styles/globalStyles';
import {fullDayFormat} from 'utils/data';

const InputBox = () => {
  const formHookProps = useForm({
    worryContent: '',
    worryPrepareContent: '',
    worryExpectedDate: null,
  });
  const {values, error, getInputProps} = formHookProps;
  console.log(values);

  const calendarRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useOutsideClick(calendarRef, false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  const handleCheckboxChange = (handleDateChange: handleDateChangeType) => {
    // 체크가 되었다가 푼상황 value=null : 안되었다가 하는 상황 value=''
    isChecked ? handleDateChange(null) : handleDateChange('');
    setIsChecked(!isChecked);
  };

  /* TODO: 버튼, 함수 연결*/
  const handlePress = () => {
    console.log('handlePress 클릭');
  };
  const activeSubmitButton =
    !!values.worryContent &&
    !(error.worryContent && error.worryPrepareContent) &&
    values.worryExpectedDate !== null;

  console.log('activeSubmitButton 상태 : ', activeSubmitButton);

  return (
    <Block>
      {formConstant.map((Input, index) => {
        const {handleDateChange, handleTextAreatChange, value} = getInputProps(
          Input.name,
        );
        return (
          <Wrapper key={index}>
            <QuestionWrapper>
              <IconWrapper>
                <Input.component size={22} />
              </IconWrapper>
              <Text type='body2'>{Input.question}</Text>
            </QuestionWrapper>
            <TextareaWrapper>
              {Input.name !== 'worryExpectedDate' ? (
                <>
                  <TextareaAutosize
                    value={typeof value === 'string' ? value : undefined}
                    onChange={handleTextAreatChange}
                    placeholder={Input.placeholder}
                    maxRows={4}
                    maxLength={
                      Input.name === 'worryContent'
                        ? 101
                        : Input.name === 'worryPrepareContent'
                          ? 201
                          : undefined
                    }
                    style={{
                      display: 'flex',
                      overflowWrap: 'break-word',
                      wordBreak: 'break-all',
                      whiteSpace: 'pre-wrap',
                      padding: '8px',
                      borderColor: '#DBDEE3',
                      resize: 'none',
                      borderRadius: 8,
                    }}
                    autoComplete='off'
                  />
                  {error[Input.name] && (
                    <ErrorText>{error[Input.name]}</ErrorText>
                  )}
                </>
              ) : (
                <>
                  {/* 캘린더 */}
                  <CalendarButtonWrapper ref={calendarRef}>
                    <CalendarButton
                      disabled={isChecked}
                      onClick={handleToggleCalendar}>
                      {values.worryExpectedDate
                        ? `${fullDayFormat(values.worryExpectedDate)}`
                        : '날짜 선택하기 (클릭)'}
                    </CalendarButton>
                    {showCalendar && (
                      <CalendarApsolute>
                        <Calendar
                          value={new Date()}
                          onChange={(value, e) => {
                            value !== null &&
                              handleDateChange(new Date(value.toString()));
                          }}
                          onClickDay={handleToggleCalendar}
                        />
                      </CalendarApsolute>
                    )}
                  </CalendarButtonWrapper>
                  {/* 체크박스 */}
                  <CheckBoxWrapper
                    onClick={() => handleCheckboxChange(handleDateChange)}>
                    <CheckBoxStyled
                      type='checkbox'
                      onChange={() => {}}
                      checked={isChecked}
                    />
                    <Text type='body2'>아직 모르겠어요</Text>
                  </CheckBoxWrapper>
                </>
              )}
            </TextareaWrapper>
          </Wrapper>
        );
      })}
    </Block>
  );
};

const Block = styled.div`
  /*2번째 자식부터 margin을 줌*/
  > :nth-child(n + 2) {
    margin-top: 15px;
  }
`;
const Wrapper = styled.div``;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const IconWrapper = styled.div`
  margin-right: 5px;
`;
const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;
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
const ErrorText = styled.div`
  margin:
    5px 2px,
    0px,
    0px;
  color: #f6afaf;
  font-family: ${GlobalStyles.fontFamilyType.regular};
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const CheckBoxStyled = styled.input`
  margin-right: 5px;
`;

export default InputBox;
