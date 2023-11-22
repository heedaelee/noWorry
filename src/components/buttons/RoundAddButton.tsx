import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';

interface RoundAddButton {
  onClick: () => void;
}

const RoundAddButton = ({onClick}: RoundAddButton) => {
  return <Button onClick={onClick}>+</Button>;
};

const Button = styled.button`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 50px;
  background-color: ${GlobalStyles.Colors.blue};
  border-radius: 100%;
  justify-content: flex-end;
  bottom: 84px;
  right: 20px;
  border: none;
  font-size: 40px;
  color: white;
`;

export default RoundAddButton;
