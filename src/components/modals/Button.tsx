import styled, {CSSProperties} from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';

interface ButtonProps {
  text: string;
  type: 'confirm' | 'cancel';
  style?: CSSProperties;
  onClick: () => void;
}

const Button = ({text, style, type, onClick}: ButtonProps) => {
  return (
    <ButtonStyled $type={type} onClick={onClick} style={style}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{$type: ButtonProps['type']}>`
  width: 115px;
  height: 46px;
  background-color: ${({$type}) =>
    $type === 'cancel' ? 'white' : GlobalStyles.Colors.blue};
  color: ${({$type}) =>
    $type === 'cancel' ? GlobalStyles.Colors.blue : 'white'};
  font-family: ${GlobalStyles.fontFamilyType.regular};
  border-radius: 16px;
  border: 1px solid ${GlobalStyles.Colors.blue};
`;

export default Button;
