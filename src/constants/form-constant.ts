import {FaRegCalendarCheck} from '@react-icons/all-files/fa/FaRegCalendarCheck';
import {FaLightbulb} from '@react-icons/all-files/fa/FaLightbulb';
import {FormConstantType} from 'types/common';
import {IoAccessibilityOutline} from '@react-icons/all-files/io5/IoAccessibilityOutline';

const formConstant: FormConstantType = [
  {
    name: 'worryContent',
    question: '어떤 걱정을 하고 계시나요?*',
    placeholder: '구체적으로 적을 수록 좋아요.',
    component: IoAccessibilityOutline,
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
    component: FaRegCalendarCheck,
  },
];

export default formConstant;
