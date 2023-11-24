import {BottomTapType} from 'types/common';
import {IconType} from 'react-icons/lib';
import {MdDataSaverOff, MdOutlineHome} from 'react-icons/md';

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
