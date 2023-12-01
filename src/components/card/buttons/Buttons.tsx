import Text from 'components/text/Text';
import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';
import {WorryStatus, onCardButtonsClick} from 'types/common';

interface ButtonsType {
  type: WorryStatus;
  onCardButtonsClick?: onCardButtonsClick;
  id: string;
}

const Buttons = ({type, onCardButtonsClick, id}: ButtonsType) => {
  const doesHappen = type === '일어남';
  const doesNotHappen = type === '일어나지 않음';

  const handleButton = (name: 'yes' | 'no') => {
    return onCardButtonsClick ? onCardButtonsClick(name, type, id) : undefined;
  };

  return (
    <>
      <YesButton onClick={() => handleButton('yes')} $doesHappen={doesHappen}>
        <Text color={doesHappen ? 'white' : 'black'} type='caption3'>
          네
        </Text>
      </YesButton>
      <NoButton
        onClick={() => handleButton('no')}
        $doesNotHappen={doesNotHappen}>
        <Text color={doesNotHappen ? 'white' : 'black'} type='caption3'>
          아니요
        </Text>
      </NoButton>
    </>
  );
};

const YesButton = styled.button<{$doesHappen: boolean}>`
  background-color: ${({$doesHappen}) =>
    $doesHappen ? GlobalStyles.Colors.green : 'white'};
  border: ${({$doesHappen}) => ($doesHappen ? 'none' : '1px solid black')};
  margin-right: 5px;
  border-radius: 9px;
`;

const NoButton = styled.button<{$doesNotHappen: boolean}>`
  background-color: ${({$doesNotHappen}) =>
    $doesNotHappen ? GlobalStyles.Colors.green : 'white'};
  border: ${({$doesNotHappen}) =>
    $doesNotHappen ? 'none' : '1px solid black'};
  border-radius: 9px;
`;
export default Buttons;
