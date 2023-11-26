import {ChangeEvent, useState} from 'react';
import {DateType, InputTypes} from 'types/common';
import {normalizeDate} from 'utils/data';

/* TODO: NOTE: 정리하기 */
type InitialValue = {
  [K in keyof InputTypes]: InputTypes[K];
};

/**
 * @param initialValue
 * @returns
 */
const useForm = (initialValue: InitialValue) => {
  /* 기능 : 데이터 보관 */
  const [values, setValues] = useState(initialValue);
  console.log(values);
  /* 기능 : 클릭시 포커싱 인지*/
  const [focused, setFocused] = useState<Record<keyof InitialValue, boolean>>({
    worryContent: false,
    worryPrepareContent: false,
    worryExpectedDate: false,
  });
  /* 기능 : 유효성 에러시 메시지 */
  const [error, setError] = useState<InitialValue>({
    worryContent: '',
    worryPrepareContent: '',
    worryExpectedDate: '',
  });

  /**
   * 포커싱 될때
   */
  const handleFocus = (inputName: Partial<keyof InitialValue>) => {
    setFocused({
      ...focused,
      [inputName]: true,
    });
  };
  /**
   * 포커싱 떠날때
   * */
  const handleBlur = (name: Partial<keyof InitialValue>) => {
    setFocused({
      ...focused,
      [name]: false,
    });
  };

  /* 데이터 삽입 로직 */
  const handleChangeValue = (
    inputName: keyof InputTypes,
    value: string | DateType,
  ) => {
    /* 데이터 저장 원리 
      inputName과 value를 받으면 여기 setValues 를 통해 객체에 차곡차곡 쌓아나감. 
      왜냐면 데이터가 useEffect을 통해 리랜더링이 되어 values가 바뀌어 나가는게 아니라서 
      {worryContent:'', worryPrepareContent:'',worryExpectedDate:''} 형식으로 저장됨
    */
    setValues({
      ...values,
      [inputName]: typeof value === 'string' ? value.trim() : value,
    });
  };
  /**
   * Validation 함수
   */
  const handleValidationError = (
    inputName: keyof InputTypes,
    value: string,
  ) => {
    let message = '';
    switch (inputName) {
      case 'worryContent':
        value.length === 101 && (message = '100자 이내로 입력해주세요:)');
        break;
      case 'worryPrepareContent':
        value.length === 201 && (message = '200자 이내로 입력해주세요:)');
        break;
    }
    message !== '' &&
      setError({
        ...error,
        [inputName]: message,
      });
  };
  /*  */
  const getInputProps = (inputName: keyof InputTypes) => {
    const handleTextAreatChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const {value} = event.target;
      handleChangeValue(inputName, value);
      handleValidationError(inputName, value);
    };
    const handleDateChange = (
      value: DateType,
      event: React.MouseEvent<HTMLButtonElement>,
    ) => {
      // console.log('데이터테스트 : ', inputName, value);
      // console.log('노멀라이징 : ', normalizeDate(value));

      handleChangeValue(inputName, value);
    };
    // const onBlur = () => handleBlur(inputName);
    // const onFocus = () => handleFocus(inputName);
    const value = values[inputName];
    return {
      value,
      // onBlur,
      // onFocus,
      handleTextAreatChange,
      handleDateChange,
    };
  };

  return {getInputProps, values, error, focused};
};

export default useForm;
