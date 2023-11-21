import Text from 'components/text/Text';
import {RxGear} from 'react-icons/rx';
import styled from 'styled-components';
import {headWrapper} from 'styles/globalStyles';

const Headers = () => {
  return (
    <HeadWrapper>
      <Text type='h1'>나의 걱정들</Text>
      <RxGear size={28} />
    </HeadWrapper>
  );
};

export default Headers;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  height: ${headWrapper}px;
  /* border: 1px solid black; */
`;
