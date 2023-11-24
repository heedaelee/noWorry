import {CiCalendar} from 'react-icons/ci';
import {FaLightbulb, FaPersonCircleQuestion} from 'react-icons/fa6';
import {FormConstantType} from 'types/common';

const formConstant: FormConstantType = [
  {
    name: 'worryContent',
    question: '어떤 걱정을 하고 계시나요?*',
    placeholder: '구체적으로 적을 수록 좋아요.',
    component: FaPersonCircleQuestion,
  },
  {
    name: 'worryPrepareContent',
    question: '대비해서 지금 어떤 일을 할 수 있을까요',
    placeholder: '구체적으로 적을 수록 좋아요.',
    component: FaLightbulb,
  },
  {
    name: 'worryExpectedDate',
    question: '그 일이 언제 일어날 것 같나요?*',
    placeholder: '날짜 선택하기',
    component: CiCalendar,
  },
];

export default formConstant;
