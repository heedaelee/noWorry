import dayjs from 'dayjs';
import {WorryList} from 'store/worry-list';

export const worryMockList: WorryList = [
  {
    id: '1',
    regDate: dayjs(),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().add(3, 'd'),
    worryStatus: '진행중',
  },
  {
    id: '2',
    regDate: dayjs(),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().add(3, 'd'),
    worryStatus: '진행중',
  },
  {
    id: '3',
    regDate: dayjs(),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().add(3, 'd'),
    worryStatus: '진행중',
  },
  {
    id: '4',
    regDate: dayjs(),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().add(3, 'd'),
    worryStatus: '진행중',
  },
  {
    id: '5',
    regDate: dayjs().subtract(1, 'd'),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().subtract(1, 'd'),
    worryStatus: '안일어남',
  },
  {
    id: '6',
    regDate: dayjs().subtract(1, 'd'),
    worryContent: '면접 때 어려운 질문이 나와서 대답 못하면 어떡하지?',
    worryPrepareContent: '모르는 질문은 어떻게 대답할 지 보고 가야겠다.',
    worryExpectedDate: dayjs().subtract(1, 'd'),
    worryStatus: '일어남',
  },
];
