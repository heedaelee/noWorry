import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';
import {FormConstantType} from 'types/common';
import CalendarWrapper from './CalendarWrapper';
import {InputBoxType} from './InputBox';

interface inputWrapperProps extends InputBoxType {
  input: FormConstantType[0];
}

const InputWrapper = ({
  input,
  getInputProps,
  values,
  error,
}: inputWrapperProps) => {
  const {handleDateChange, handleTextAreaChange, value} = getInputProps(
    input.name,
  );

  return (
    <Wrapper>
      {input.name !== 'worryExpectedDate' ? (
        <>
          <TextareaAutosize
            value={value as string}
            onChange={handleTextAreaChange}
            placeholder={input.placeholder}
            maxRows={4}
            maxLength={
              input.name === 'worryContent'
                ? 101
                : input.name === 'worryPrepareContent'
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
              position: 'relative',
            }}
            autoComplete='off'></TextareaAutosize>
          <TextWrapper>
            {error[input.name] && <ErrorText>{error[input.name]}</ErrorText>}
            <TextCounter>{`${value?.toString().length}/${
              input.name === 'worryContent' ? '100' : '200'
            }`}</TextCounter>
          </TextWrapper>
        </>
      ) : (
        <CalendarWrapper handleDateChange={handleDateChange} values={values} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`;

const ErrorText = styled.div`
  margin:
    5px 2px,
    0px,
    0px;
  color: #f6afaf;
  font-family: ${GlobalStyles.fontFamilyType.regular};
  position: absolute;
  left: 0px;
`;
const TextWrapper = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
`;
const TextCounter = styled.div`
  position: absolute;
  font-size: 12px;
  color: ${GlobalStyles.Colors.gray};
  top: 2px;
  right: 0px;
`;
export default InputWrapper;
