import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

import {GlobalStyles, bottomTapWrapper, mainPadding} from 'styles/globalStyles';
import BottomNavigation from 'components/bottomNavigation/BottomNavigation';

interface ContainerProps {}

const Container = ({}: ContainerProps) => {
  return (
    <Wrapper>
      {/* 자식 라우터 시작 --> */}
      <Outlet />
      {/*  -->  끝 */}
      <BottomNavigation />
    </Wrapper>
  );
};

// 가장 외부 Contanier
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width로 가로 크기 최대값을 고정해준다 */
  max-width: 390px;
  margin: auto;
  padding: 0px;
  background-color: ${GlobalStyles.backgroundColor};
`;

export default Container;
