import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import BottomNavigation from 'components/bottomNavigation/BottomNavigation';
import Headers from 'components/headers/Headers';
import {useChangePages} from 'hooks/useChagePages';
import {GlobalStyles} from 'styles/globalStyles';

const Container = () => {
  const [pages] = useChangePages();
  const hasBottomNavi = ['list', 'statics', 'setting'].includes(pages);

  return (
    <Wrapper>
      <Headers />
      {/* 자식 라우터 시작 --> */}
      <Outlet />
      {/*  -->  끝 */}
      {hasBottomNavi && <BottomNavigation />}
    </Wrapper>
  );
};

// 가장 외부 Contanier
const Wrapper = styled.div`
  height: 100%;
  /* max-width로 가로 크기 최대값을 고정해준다 */
  max-width: 390px;
  margin: auto;
  padding: 0px;
  background-color: ${GlobalStyles.backgroundColor};
`;

export default Container;
