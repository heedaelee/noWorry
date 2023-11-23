import Text from 'components/text/Text';
import styled from 'styled-components';
import {FaPersonCircleQuestion} from 'react-icons/fa6';

const Form = () => {
  return (
    <Wrapper>
      <QuestionWrapper>
        <IconWrapper>
          <FaPersonCircleQuestion size={22} />
        </IconWrapper>
        <Text type='body2'>어떤 걱정을 하고 계시나요?*</Text>
      </QuestionWrapper>
      <TextareaStyled rows={1} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const IconWrapper = styled.div`
  margin-right: 5px;
`;
const TextareaStyled = styled.textarea`
  width: 100%;
`;
export default Form;
