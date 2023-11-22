import {BOTTOM_TAP_NAME, PAGES} from 'constants/atom-constant';
import {atom} from 'recoil';

export type PageType = 'list' | 'editor' | 'register' | 'statics' | 'setting';

/* 이렇게 타입 주기!! */
export const pagesState = atom<PageType>({
  key: PAGES,
  default: 'list',
});
