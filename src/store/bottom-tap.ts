import {BOTTOM_TAP_NAME} from 'constants/atom-constant';
import {atom} from 'recoil';

export type BottomTapType = '홈' | '통계';

// 사용 X: 한동안만 두자.. 기억하도록
// export const bottomTapState = atom({
//   key: BOTTOM_TAP_NAME,
//   default: initialState,
// });

/* 이렇게 타입 주기!! */
export const bottomTapState = atom<BottomTapType>({
  key: BOTTOM_TAP_NAME,
  default: '홈',
});
