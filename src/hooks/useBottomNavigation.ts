import {useRecoilState} from 'recoil';
import {bottomTapState} from 'store/bottom-tap';
import {BottomTapType} from 'types/common';
import {useChangePages} from './useChagePages';
import {useEffect} from 'react';

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
  useEffect(() => {
    page === 'list' && activeTapName !== '홈' && setActiveTapName('홈');
    page === 'statics' && activeTapName !== '통계' && setActiveTapName('통계');
  }, [activeTapName, page, setActiveTapName]);

  const handleBottomTapPress = (title: BottomTapType) => {
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
