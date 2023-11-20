import Text from 'components/text/Text';
import styled from 'styled-components';

interface DropdownProps {
  onClick: (text: string) => void;
  menuTexts: string[];
}

const Dropdown = ({onClick, menuTexts}: DropdownProps) => {
  return (
    <Wrapper>
      {menuTexts.map((menuText, index) => (
        <ButtonStyled key={index} onClick={() => onClick(menuText)}>
          <Text type='button'>{menuText}</Text>
        </ButtonStyled>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left: -23px;
  width: 130%;
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
