import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';

interface NormalButtonType {
  children: string;
  onClick: () => void;
  buttonType: 'ok' | 'cancel';
  disabled?: boolean;
}

const NormalButton = ({
  children,
  onClick,
  buttonType,
  disabled,
}: NormalButtonType) => {
  return (
    <Button $type={buttonType} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

const Button = styled.button<{$type: NormalButtonType['buttonType']}>`
  height: 54px;
  width: 171px;
  border-radius: 8px;
  border: none;
  background-color: ${({$type, disabled}) => {
    if (disabled) {
      return '#E4E5E6';
    }
    switch ($type) {
      case 'ok':
        return '#2663D6';
      case 'cancel':
        return '#E4E5E6';
    }
  }};
  color: ${({$type, disabled}) => {
    if (disabled) {
      return '#A3A3A3';
    }
    switch ($type) {
      case 'ok':
        return 'white';
      case 'cancel':
        return '#A3A3A3';
    }
  }};

  font-family: ${GlobalStyles.fontFamilyType.bold};
`;
export default NormalButton;
