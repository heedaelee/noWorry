import {ReactNode, useState} from 'react';
import styled from 'styled-components';
interface ModalType {
  isVisible?: boolean;
  closeModal?: () => void;
  children: ReactNode;
}

const Modal = ({isVisible, closeModal, children}: ModalType) => {
  return (
    <>
      {isVisible ? (
        <Wrapper>
          <ModalBackGround onClick={closeModal} />
          <Container>{children}</Container>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
`;
const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
`;

export default Modal;
