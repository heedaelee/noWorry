import Form from 'components/worryForm/Form';
import styled from 'styled-components';
import {
  HorizontalPaddingWrapper,
  fullHeight,
  headWrapper,
  mainPadding,
} from 'styles/globalStyles';

const Registor = () => {
  const $marginTop = 30;

  return (
    <HorizontalPaddingWrapper style={{marginTop: `${$marginTop}px`}}>
      <Wrapper $marginTop={$marginTop}>
        <Form />
      </Wrapper>
    </HorizontalPaddingWrapper>
  );
};

const Wrapper = styled.div<{$marginTop: number}>`
  /* background-color: yellow; */
  height: ${({$marginTop}) =>
    fullHeight - (headWrapper + mainPadding + $marginTop)}px;
`;

export default Registor;
