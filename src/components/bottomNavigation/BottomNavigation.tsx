/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

import {GlobalStyles, bottomTapWrapper, mainPadding} from 'styles/globalStyles';
import {MdOutlineHome, MdDataSaverOff} from 'react-icons/md';
import {useMemo, useState} from 'react';
import {IconType} from 'react-icons/lib';
import Text from 'components/text/Text';
import {useNavigate} from 'react-router-dom';

interface BottomNavigationProps {}

type BottomTaType = '홈' | '통계';

const BottomNavigation = ({}: BottomNavigationProps) => {
  const [activeTapName, setActiveTapName] = useState<BottomTaType>('홈');
  const navigate = useNavigate();
  const TapItems: {
    title: BottomTaType;
    component: IconType;
  }[] = [
    {
      title: '홈',
      component: MdOutlineHome,
    },
    {
      title: '통계',
      component: MdDataSaverOff,
    },
  ];

  const handleBottomTapPress = (title: BottomTaType) => {
    setActiveTapName(title);
    switch (title) {
      case '통계':
        navigate('/Statics');
        break;
      case '홈':
        navigate('/');
        break;
      default:
        navigate('/');
        break;
    }
  };

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
