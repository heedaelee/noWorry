import {useNavigate} from 'react-router-dom';
import {SetterOrUpdater, useRecoilState} from 'recoil';
import {bottomTapState} from 'store/bottom-tap';
import {BottomTapType} from 'types/common';
import {useChangePages} from './useChagePages';

type useBottomNavigationType = () => [
  BottomTapType,
  (title: BottomTapType) => void,
];

/**
 * @param
 * @return [activeTapName, setActiveTapName, handleBottomTapPress]
 */
export const useBottomNavigation: useBottomNavigationType = () => {
  const [activeTapName, setActiveTapName] = useRecoilState(bottomTapState);
  const [page, setPage] = useChangePages();

  const handleBottomTapPress = (title: BottomTapType) => {
    console.log('title', title);
    setActiveTapName(title);
    switch (title) {
      case '통계':
        setPage('statics');
        break;
      case '홈':
        setPage('list');
        break;
      default:
        setPage('list');
        break;
    }
  };

  return [activeTapName, handleBottomTapPress];
};
