import Form from 'components/worryForm/Form';
import styled from 'styled-components';
import {
  HorizontalPaddingWrapper,
  fullHeight,
  headWrapper,
  mainPadding,
} from 'styles/globalStyles';

const Registor = () => {
  return (
    <HorizontalPaddingWrapper>
      <Wrapper>
        <Form />
      </Wrapper>
    </HorizontalPaddingWrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: yellow; */
  height: ${fullHeight - (headWrapper + mainPadding)}px;
`;

export default Registor;
