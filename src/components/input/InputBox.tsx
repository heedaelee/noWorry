import Text from 'components/text/Text';
import formConstant from 'constants/form-constant';
import useForm from 'hooks/useForm';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';

const InputBox = () => {
  const formHookProps = useForm({
    worryContent: '',
    worryPrepareContent: '',
    worryExpectedDate: '',
  });
  /* TODO: 버튼, 함수 연결*/
  const handlePress = () => {
    console.log('handlePress 클릭');
  };
  const activeSubmitButton =
    !!formHookProps.values.worryContent &&
    !(
      formHookProps.error.worryContent &&
      formHookProps.error.worryPrepareContent
    );

  console.log(formHookProps.error);
  return (
    <Block>
      {formConstant.map((Input, index) => {
        const {handleDateChange, handleTextAreatChange, value} =
          formHookProps.getInputProps(Input.name);
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
                  {formHookProps.error[Input.name] && (
                    <ErrorText>{formHookProps.error[Input.name]}</ErrorText>
                  )}
                </>
              ) : (
                <CalendarButton>날짜 선택하기 (클릭)</CalendarButton>
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
const CalendarButton = styled.button`
  height: 17px;
  display: flex;
  padding: 8px;
  border: 1px solid rgb(219, 222, 227);
  border-radius: 8px;
  font-family: 'monospace';
  background-color: white;
  color: rgb(152, 153, 155);
  text-align: left;
`;

const ErrorText = styled.div`
  margin:
    5px 2px,
    0px,
    0px;
  color: #f6afaf;
  font-family: ${GlobalStyles.fontFamilyType.regular};
`;

export default InputBox;
