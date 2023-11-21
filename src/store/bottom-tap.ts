import {BOTTOM_TAP_NAME} from 'constants/atom-constant';
import {atom} from 'recoil';

export type BottomTapType = '홈' | '통계';

/**
 * 초기값 지정
 */
const initialState: BottomTapType = '홈';

export const bottomTapState = atom({
  key: BOTTOM_TAP_NAME,
  default: initialState,
});
