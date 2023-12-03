import styled from 'styled-components';
import Modal from './Modal';
import Text from 'components/text/Text';
import Button from './Button';
import {MouseEventHandler} from 'react';

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

  const handleStopPropagation: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  return (
    <Modal isVisible={open} closeModal={onCancelButtonClick}>
      <Wrapper onClick={handleStopPropagation}>
        <QuestionWrapper>
          <Text type={'sub1'}>{message}</Text>
        </QuestionWrapper>
        <ButtonRow>
          <Button onClick={handleCancel} text='취소' type='cancel' />
          <Button onClick={handleConfirm} text='삭제' type='confirm' />
        </ButtonRow>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 270px;
  height: 140px;
  border-radius: 20px;
  /* gap: 40px; */
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
const QuestionWrapper = styled.div`
  display: flex;
  text-align: center;
  white-space: pre-wrap;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  white-space: pre-wrap;
  width: 100%;
`;
export default ConfirmModal;
