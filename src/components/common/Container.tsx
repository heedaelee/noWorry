import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import {GlobalStyles, bottomTapWrapper, mainPadding} from 'styles/globalStyles';
import BottomNavigation from 'components/bottomNavigation/BottomNavigation';
import {useRecoilState} from 'recoil';
import {pagesState} from 'store/pages';
import Headers from 'components/headers/Headers';
import {useChangePages} from 'hooks/useChagePages';

interface ContainerProps {}

const Container = ({}: ContainerProps) => {
  const [pages, setPages] = useChangePages();

  return (
    <Wrapper>
      <Headers />
      {/* 자식 라우터 시작 --> */}
      <Outlet />
      {/*  -->  끝 */}
      {(pages === 'list' || pages === 'statics') && <BottomNavigation />}
    </Wrapper>
  );
};

// 가장 외부 Contanier
const Wrapper = styled.div`
  height: 100%;
  /* display: flex;
  flex-direction: column; */
  /* max-width로 가로 크기 최대값을 고정해준다 */
  max-width: 390px;
  margin: auto;
  padding: 0px;

  background-color: ${GlobalStyles.backgroundColor};
`;

export default Container;
