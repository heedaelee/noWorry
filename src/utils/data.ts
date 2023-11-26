import {DateType} from 'types/common';
import dayjs, {type Dayjs} from 'dayjs';
import 'dayjs/locale/ko';

/* 한국어 */
dayjs.locale('ko');

/**
 * Date|Dayjs|number 형태를 Dayjs로 표준화
 * @param date
 * @returns dayjs
 */
export const normalizeDate = (date: DateType): Dayjs => {
  if (typeof date === 'number' && date.toString().length === 10) {
    return dayjs(date * 1000);
  }

  return dayjs(date);
};

/**
 * x월 x일 x요일 포맷 형식
 * @param date
 */
export const fullDayFormat = (date: DateType) =>
  normalizeDate(date).format('M월 D일 dddd');

/**
 * xx년 x월 포맷 형식
 * @param date
 */
export const yearMonth = (date: DateType) =>
  normalizeDate(date).format('Y년 M월');
