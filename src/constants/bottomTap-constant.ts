import {IconType} from 'react-icons/lib';
import {IoHomeOutline} from '@react-icons/all-files/io5/IoHomeOutline';
import {MdDataUsage} from '@react-icons/all-files/md/MdDataUsage';

import {BottomTapType} from 'types/common';

export const TapItems: {
  title: BottomTapType;
  component: IconType;
}[] = [
  {
    title: '홈',
    component: IoHomeOutline,
  },
  {
    title: '통계',
    component: MdDataUsage,
  },
];
