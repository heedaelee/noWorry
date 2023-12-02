import {IconType} from 'react-icons/lib';

export type DateType = Date | number | string;

/* Recoil 자료 */
export type PageType = 'list' | 'editor' | 'register' | 'statics' | 'setting';

export type BottomTapType = '홈' | '통계';

/**
 * @key worryExpectedDate : 날짜 | 아직 모름 | 선택안함(초기값)
 * */
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
  name: keyof InputTypes;
  question: string;
  placeholder: string;
  component: IconType;
}>;

/* 폼에서 받는 인풋 타입, {}형식이라 키로 사용하려면 keyof InputTypes */
export type InputTypes = Pick<
  WorryItem,
  'worryContent' | 'worryPrepareContent' | 'worryExpectedDate'
>;

/* 카드 버튼 클릭 함수 타입 */
export type onCardButtonsClick = (
  buttonType: 'yes' | 'no',
  currentWorryStatus: WorryStatus,
  id: string,
) => void;

/* 드롭다운 컴포넌트 메뉴 타이틀 타입 */
export type MenuTextType = cardMenuType | sortMenuType;

/* cardMenuType : 수정 | 삭제 */
export type cardMenuType = '수정' | '삭제';

/* sortMenuType :  최근 작성중 | 예상날짜 빠른순 */
export type sortMenuType = '최근 작성순' | '예상날짜 빠른순';
