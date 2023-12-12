import {IconType} from 'react-icons/lib';
import {RxGear} from 'react-icons/rx';
import {PageType} from 'types/common';

interface headerConstantType {
  page: {
    [K in PageType]: {
      title: string;
      IconComponent?: IconType;
    };
  };
}

/* NOTE: 페이지 추가시 추가 */
export const headerConstant: headerConstantType = {
  page: {
    list: {title: '나의 걱정들', IconComponent: RxGear},
    statics: {title: '통계'},
    register: {title: '걱정 기록'},
    editor: {title: '걱정 수정'},
    setting: {title: '설정'},
  },
};
