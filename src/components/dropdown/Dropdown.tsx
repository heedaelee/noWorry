import Text from 'components/text/Text';
import styled, {CSSProperties} from 'styled-components';

interface DropdownProps {
  onClick: (text: string, data?: string) => void;
  menuTexts: string[];
  WrapperStyle?: CSSProperties;
  ButtonStyle?: CSSProperties;
  data?: string;
}

const Dropdown = ({
  onClick,
  menuTexts,
  WrapperStyle,
  ButtonStyle,
  data,
}: DropdownProps) => {
  return (
    <Wrapper style={WrapperStyle}>
      {menuTexts.map((menuText, index) => (
        <ButtonStyled
          key={index}
          onClick={() => onClick(menuText, data)}
          style={ButtonStyle}>
          <Text type='button'>{menuText}</Text>
        </ButtonStyled>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
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
