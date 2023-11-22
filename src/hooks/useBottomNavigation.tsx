import {Dispatch, SetStateAction, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {SetterOrUpdater, useRecoilState} from 'recoil';
import {BottomTapType, bottomTapState} from 'store/bottom-tap';

type useBottomNavigationType = () => [
  BottomTapType,
  SetterOrUpdater<BottomTapType>,
  (title: BottomTapType) => void,
];

/**
 * @param
 * @return [activeTapName, setActiveTapName, handleBottomTapPress]
 */
export const useBottomNavigation: useBottomNavigationType = () => {
  const [activeTapName, setActiveTapName] = useRecoilState(bottomTapState);

  const navigate = useNavigate();

  const handleBottomTapPress = (title: BottomTapType) => {
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

  return [activeTapName, setActiveTapName, handleBottomTapPress];
};
