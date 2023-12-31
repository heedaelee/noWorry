import NormalButton from 'components/buttons/NormalButton';
import styled from 'styled-components';

interface FormButtonsProps {
  handlePressCancel: () => void;
  handlePressSave: () => void;
  activeSubmitButton: boolean;
}
const FormButtons = ({
  handlePressCancel,
  handlePressSave,
  activeSubmitButton,
}: FormButtonsProps) => {
  return (
    <ButtonRow>
      <NormalButton buttonType='cancel' onClick={handlePressCancel}>
        취소
      </NormalButton>
      <NormalButton
        disabled={!activeSubmitButton}
        buttonType='ok'
        onClick={handlePressSave}>
        저장
      </NormalButton>
    </ButtonRow>
  );
};

const ButtonRow = styled.div`
  :first-child {
    margin-right: 10px;
  }
  width: 100%;
  height: 65px;
  padding-bottom: 11px;
  display: flex;
`;

export default FormButtons;
