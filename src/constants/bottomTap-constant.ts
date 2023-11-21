import {IconType} from 'react-icons/lib';
import {MdDataSaverOff, MdOutlineHome} from 'react-icons/md';
import {BottomTapType} from 'store/bottom-tap';

export const TapItems: {
  title: BottomTapType;
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
