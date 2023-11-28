import styled from 'styled-components';
import Modal from './Modal';

interface ConfirmModalProps {
  open: boolean;
  message: string;
  onConfirmButtonClick: () => void;
  onCancelButtonClick: () => void;
}

const ConfirmModal = ({
  message,
  open,
  onCancelButtonClick,
  onConfirmButtonClick,
}: ConfirmModalProps) => {
  const handleConfirm = () => {
    // 확인 버튼
    onConfirmButtonClick();
    onCancelButtonClick();
  };
  const handleCancel = () => {
    // 취소 버튼
    onCancelButtonClick();
  };

  return (
    <Modal isVisible={open}>
      <Wrapper>TEST</Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  gap: 10px;
  padding: 3.6rem 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
export default ConfirmModal;
