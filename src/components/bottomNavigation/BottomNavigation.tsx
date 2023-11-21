/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

import {GlobalStyles, bottomTapWrapper, mainPadding} from 'styles/globalStyles';
import Text from 'components/text/Text';
import {useBottomNavigation} from 'hooks/useBottomNavigation';
import {TapItems} from 'constants/bottomTap-constant';

interface BottomNavigationProps {}

const BottomNavigation = ({}: BottomNavigationProps) => {
  const [activeTapName, setActiveTapName, handleBottomTapPress] =
    useBottomNavigation();

  return (
    <BottomTapWrapper>
      {TapItems.map((Tap, index) => {
        const {green, gray} = GlobalStyles.Colors;
        const color = activeTapName === Tap.title ? green : gray;

        return (
          <BottomTapButton
            key={index}
            onClick={() => handleBottomTapPress(Tap.title)}>
            <Tap.component size={35} color={color} />
            <Text type='h3' color={color}>
              {Tap.title}
            </Text>
          </BottomTapButton>
        );
      })}
    </BottomTapWrapper>
  );
};

const BottomTapWrapper = styled.div`
  display: flex;
  justify-content: row;
  height: ${bottomTapWrapper}px;
  width: 100%;
  /* border: 1px solid black; */
`;

const BottomTapButton = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export default BottomNavigation;
