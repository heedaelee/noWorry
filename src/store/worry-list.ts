import {atom} from 'recoil';

import {localStorageEffect} from 'store/local-storage-effect';
import {WORRY_LIST_KEY} from 'constants/atom-constant';

export interface WorryItem {
  id: string;
  worryContent: string;
  worryPrepareContent: string;
  worryExpectedDate: Date | '';
  regDate: Date;
  worryStatus: WorryStatus;
}

export type WorryStatus = '진행중' | '일어남' | '안일어남';

export interface WorryList extends Array<WorryItem> {}
export interface initialStateType {
  worryList: WorryList;
  selectedI: WorryItem['id'];
}

/**
 * 초기값 지정
 */
const initialState: initialStateType = {
  selectedI: '',
  worryList: [],
};

export const worryListState = atom({
  key: WORRY_LIST_KEY,
  default: initialState,
  effects: [localStorageEffect(WORRY_LIST_KEY)],
});
