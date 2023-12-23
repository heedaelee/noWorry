import styled from 'styled-components';
import {
  HorizontalPaddingWrapper,
  fullHeight,
  headWrapper,
  mainPadding,
} from 'styles/globalStyles';

import Form from 'components/worryForm/Form';
import useListenBackButton from 'hooks/useListenBackButton';
import {useRecoilState} from 'recoil';
import {pagesState} from 'store/pages';

const Registor = () => {
  const $marginTop = 30;

  const [pages, setPages] = useRecoilState(pagesState);

  useListenBackButton(() => setPages('list'));

  // useEffect(() => {
  //   const handleBackButton = () => {
  //   };
  //   window.addEventListener('popstate', handleBackButton);

  //   return () => {
  //     window.removeEventListener('popstate', handleBackButton);
  //   };
  // }, []);

  return (
    <HorizontalPaddingWrapper style={{marginTop: `${$marginTop}px`}}>
      <Wrapper $marginTop={$marginTop}>
        <Form />
      </Wrapper>
    </HorizontalPaddingWrapper>
  );
};

const Wrapper = styled.div<{$marginTop: number}>`
  height: ${({$marginTop}) =>
    fullHeight - (headWrapper + mainPadding + $marginTop)}px;
`;

export default Registor;
