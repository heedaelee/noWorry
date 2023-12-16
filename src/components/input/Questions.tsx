import Text from 'components/text/Text';
import {IconType} from 'react-icons/lib';
import styled from 'styled-components';

interface QeustionsProps {
  Icon: IconType;
  question: string;
}

const Qeustions = ({Icon, question}: QeustionsProps) => {
  return (
    <QuestionWrapper>
      <IconWrapper>
        <Icon size={22} />
      </IconWrapper>
      <Text type='body2'>{question}</Text>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const IconWrapper = styled.div`
  margin-right: 5px;
`;

export default Qeustions;
