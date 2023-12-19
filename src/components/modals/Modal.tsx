import {ReactNode} from 'react';
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
        <ModalBackGround onClick={closeModal}>{children}</ModalBackGround>
      ) : (
        <></>
      )}
    </>
  );
};

const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
`;
export default Modal;
