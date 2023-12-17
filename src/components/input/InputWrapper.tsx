import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';
import {FormConstantType} from 'types/common';
import {InputBoxType} from './InputBox';
import CalendarWrapper from './CalendarWrapper';

interface inputWrapperProps extends InputBoxType {
  input: FormConstantType[0];
}

const InputWrapper = ({
  input,
  getInputProps,
  values,
  error,
}: inputWrapperProps) => {
  const {handleDateChange, handleTextAreatChange, value} = getInputProps(
    input.name,
  );
  return (
    <Wrapper>
      {input.name !== 'worryExpectedDate' ? (
        <>
          <TextareaAutosize
            value={typeof value === 'string' ? value : undefined}
            onChange={handleTextAreatChange}
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
            }}
            autoComplete='off'
          />
          {error[input.name] && <ErrorText>{error[input.name]}</ErrorText>}
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
`;

export default InputWrapper;
