import Text from 'components/text/Text';
import {Dispatch} from 'react';
import styled, {CSSProperties} from 'styled-components';
import {MenuTextType} from 'types/common';

interface DropdownProps {
  onClick: (
    text: string,
    data?: string,
    passFunction?: Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  menuTexts: Array<MenuTextType>;
  WrapperStyle?: CSSProperties;
  ButtonStyle?: CSSProperties;
  data?: string;
  passFunction?: Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({
  onClick,
  menuTexts,
  WrapperStyle,
  ButtonStyle,
  data,
  passFunction,
}: DropdownProps) => {
  return (
    <Wrapper style={WrapperStyle}>
      {menuTexts.map((menuText, index) => (
        <ButtonStyled
          key={index}
          onClick={() => onClick(menuText, data, passFunction)}
          style={ButtonStyle}>
          <Text type='button'>{menuText}</Text>
        </ButtonStyled>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
`;
const ButtonStyled = styled.button`
  background-color: white;
  text-align: right;
  border: none;
  padding: 10px 5px;
  border-radius: 8px;
  /* width: 90%; */
`;

export default Dropdown;
