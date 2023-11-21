import {atom} from 'recoil';
import {localStorageEffect} from 'store/local-storage-effect';
import {WORRY_LIST_KEY} from 'constants/atom-constant';
import {DateType} from 'types/common';

export interface WorryItem {
  id: string;
  worryContent: string;
  worryPrepareContent: string;
  worryExpectedDate: DateType | '';
  regDate: DateType;
  worryStatus: WorryStatus;
}

export type WorryStatus = '현재 걱정' | '일어나지 않음' | '일어남';

export interface WorryList extends Array<WorryItem> {}
interface InitialStateType {
  worryList: WorryList;
  selectedI: WorryItem['id'];
  page: 'list' | 'editor' | 'register';
}

/**
 * 초기값 지정
 */
const initialState: InitialStateType = {
  selectedI: '',
  worryList: [],
  page: 'list',
};

export const worryListState = atom({
  key: WORRY_LIST_KEY,
  default: initialState,
  effects: [localStorageEffect(WORRY_LIST_KEY)],
});
