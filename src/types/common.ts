import {type Dayjs} from 'dayjs';
import {IconType} from 'react-icons/lib';

export type DateType = Date | Dayjs | number;

/* Recoil 자료 */
export type PageType = 'list' | 'editor' | 'register' | 'statics' | 'setting';

export type BottomTapType = '홈' | '통계';

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

/* 폼 상수 데이터 */
export type FormConstantType = Array<{
  name: string;
  question: string;
  placeholder: string;
  component: IconType;
}>;

export type InputTypes = '';
