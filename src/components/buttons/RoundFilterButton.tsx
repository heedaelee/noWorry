import Text from 'components/text/Text';
import styled from 'styled-components';
import {GlobalStyles} from 'styles/globalStyles';
import {WorryStatus} from 'types/common';

interface RoundFilterButtonProps {
  buttonText: WorryStatus;
  $isSelected: boolean;
  onClick: (text: WorryStatus) => void;
  style?: React.CSSProperties;
}

const RoundFilterButton = ({
  buttonText,
  $isSelected,
  onClick,
}: RoundFilterButtonProps) => {
  return (
    <RoundFilterButtonStyled
      $isSelected={$isSelected}
      onClick={() => onClick(buttonText)}>
      <Text type='button' color={$isSelected ? 'white' : 'black'}>
        {buttonText}
      </Text>
    </RoundFilterButtonStyled>
  );
};

const RoundFilterButtonStyled = styled.button<
  Pick<RoundFilterButtonProps, '$isSelected'>
>`
  background-color: ${({$isSelected}) =>
    $isSelected ? GlobalStyles.Colors.green : 'none'};
  align-items: center;
  padding: 8px 10px;
  border-radius: 16px;
  border: ${({$isSelected}) =>
    $isSelected ? 'none' : `1px solid ${GlobalStyles.Colors.green}`};
`;

export default RoundFilterButton;
