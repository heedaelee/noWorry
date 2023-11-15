import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface ContainerProps {}

const Container = ({}: ContainerProps) => {
  return (
    <Wrapper>
      {/* 자식 라우터 시작 --> */}
      <Outlet />
      {/*  -->  끝 */}
    </Wrapper>
  );
};

// 가장 외부 Contanier
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width로 가로 크기 최대값을 고정해준다 */
  max-width: 390px;
  height: 100vh;
  margin: auto;
  /* border: 4px solid black; */
`;

export default Container;
