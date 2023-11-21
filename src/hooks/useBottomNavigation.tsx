import {Dispatch, SetStateAction, useEffect} from 'react';
import {MdOutlineHome, MdDataSaverOff} from 'react-icons/md';
import {useMemo, useState} from 'react';
import {IconType} from 'react-icons/lib';
import {useNavigate} from 'react-router-dom';
import {BottomTapType} from 'store/bottom-tap';

type useBottomNavigationType = () => [
  BottomTapType,
  Dispatch<SetStateAction<BottomTapType>>,
  (title: BottomTapType) => void,
];

/**
 * @param
 * @return [activeTapName, setActiveTapName, handleBottomTapPress]
 */
export const useBottomNavigation: useBottomNavigationType = () => {
  const [activeTapName, setActiveTapName] = useState<BottomTapType>('홈');
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
