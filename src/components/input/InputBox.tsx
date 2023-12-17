import {ChangeEvent, useRef, useState} from 'react';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';
import formConstant from 'constants/form-constant';
import {InitialValue, handleDateChangeType} from 'hooks/useForm';
import {DateType, InputTypes} from 'types/common';
import Qeustions from './Questions';
import InputWrapper from './InputWrapper';

export interface InputBoxType {
  getInputProps: (inputName: keyof InputTypes) => {
    value: string | DateType | null;
    handleTextAreatChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    handleDateChange: handleDateChangeType;
  };
  values: InitialValue;
  error: InitialValue;
}

const InputBox = ({getInputProps, values, error}: InputBoxType) => {
  return (
    <Block>
      {formConstant.map((input, index) => {
        return (
          <Wrapper key={index}>
            <Qeustions question={input.question} Icon={input.component} />
            <InputWrapper
              getInputProps={getInputProps}
              input={input}
              values={values}
              error={error}
            />
          </Wrapper>
        );
      })}
    </Block>
  );
};

const Block = styled.div`
  flex: 1;
  /*2번째 자식부터 margin을 줌*/
  > :nth-child(n + 2) {
    margin-top: 15px;
  }
`;
const Wrapper = styled.div``;

export default InputBox;
