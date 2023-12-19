import React, {ChangeEvent} from 'react';
import styled, {CSSProperties} from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';

interface SwitchProps {
  menuText: Array<string>;
  style?: CSSProperties;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = ({menuText, style, active, setActive}: SwitchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    setActive(checked);
  };

  return (
    <SwitchWrapper style={style}>
      <CheckBoxStyled type='checkbox' id='toggleBtn' onChange={handleChange} />
      <LabelStyled htmlFor='toggleBtn'>
        <SwitchButton $active={active} />
        <EntireText $active={active}>{menuText[0]}</EntireText>
        <MonthText $active={active}>{menuText[1]}</MonthText>
      </LabelStyled>
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  box-shadow: boxShadow= '0px 1px 5px rgba(0, 0, 0, 0.6)';
  height: 80%;
  width: 100%;
`;

const CheckBoxStyled = styled.input`
  display: none;
`;
const LabelStyled = styled.label`
  z-index: 0;
  /* label의 자식인 button의 위치를 absolute로 설정하기 위해 */
  position: relative;
  /* 만들고자 하는 button 의 크기와 색상 */
  width: 100%;
  height: 100%;
  border-radius: 2em;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SwitchButton = styled.div<{$active: boolean}>`
  /* state가 false일 때의 after */
  display: flex;
  position: absolute;
  width: 55%;
  height: 100%;
  justify-content: center;
  align-items: center;
  /* false일 때는 우측에 있어야하므로 전체 길이의 반만큼 이동한 상태 */
  left: ${props => (props.$active ? '48%' : 0)};
  border-radius: 2rem;
  background: ${GlobalStyles.Colors.green};
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;
  z-index: 0;
`;
const EntireText = styled.div<{$active: boolean}>`
  color: ${props => (!props.$active ? 'white' : GlobalStyles.Colors.gray)};
  text-align: center;
  flex: 1;
  z-index: 10;
`;
const MonthText = styled.div<{$active: boolean}>`
  color: ${props => (props.$active ? 'white' : GlobalStyles.Colors.gray)};
  flex: 1;
  text-align: center;
  z-index: 10;
`;

export default Switch;
