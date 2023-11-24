import Text from 'components/text/Text';
import formConstant from 'constants/form-constant';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const InputBox = () => {
  const handlePress = () => {
    console.log('반응');
  };
  return (
    <Block>
      {formConstant.map((Input, index) => {
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
                <TextareaAutosize
                  placeholder={Input.placeholder}
                  maxRows={4}
                  style={{
                    display: 'flex',
                    flex: 1,
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
              ) : (
                <div></div>
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
  margin-top: 6px;
`;

export default InputBox;
