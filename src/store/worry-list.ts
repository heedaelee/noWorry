import {WORRY_LIST_KEY} from 'constants/atom-constant';
import {atom} from 'recoil';
import {localStorageEffect} from 'store/local-storage-effect';
import {WorryItem} from 'types/common';

export type WorryStatus = '현재 걱정' | '일어나지 않음' | '일어남';

export interface WorryList extends Array<WorryItem> {}
export interface InitialStateType {
  worryList: WorryList;
  selectedId: WorryItem['id'];
}
/**
 * 초기값 지정
 */
const initialState = {
  selectedId: '',
  worryList: [],
};

export const worryListState = atom<InitialStateType>({
  key: WORRY_LIST_KEY,
  default: initialState,
  effects: [localStorageEffect(WORRY_LIST_KEY)],
});
