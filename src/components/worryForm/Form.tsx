import NormalButton from 'components/buttons/NormalButton';
import InputBox from 'components/input/InputBox';
import {useChangePages} from 'hooks/useChagePages';
import useForm, {InitialValue} from 'hooks/useForm';
import {useCallback} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {worryListState} from 'store/worry-list';
import styled from 'styled-components';
import {WorryItem} from 'types/common';
import {v4 as uuidv4} from 'uuid';

const Form = () => {
  const [page, setPage] = useChangePages();
  const [worryState, setWorryState] = useRecoilState(worryListState);
  const {worryList, selectedId} = worryState;
  /**
   * Reocoil의 데이터를 useForm에 초기값 할당하기 (register | editor)
   */
  let initialValue: InitialValue = {
    worryContent: '',
    worryPrepareContent: '',
    worryExpectedDate: '',
  };
  /* 페이지가 수정일떄 */
  if (selectedId !== '' && page === 'editor') {
    worryList.forEach((v, i) => {
      if (v.id === selectedId) {
        initialValue = {
          worryContent: v.worryContent,
          worryPrepareContent: v.worryPrepareContent,
          worryExpectedDate: v.worryExpectedDate,
        };
      }
    });
    console.log('initialValue :', initialValue);
  }
  /* 등록페이지면 초기값, 수정페이지면 위의 리코일 worryList 할당  */
  const formHookProps = useForm(initialValue);
  const {values, error, getInputProps} = formHookProps;

  const handlePressCancel = () => {
    setPage('list');
  };
  const handlePressSave = useCallback(() => {
    let newWorryList;
    try {
      /* 걱정등록 */
      if (page === 'register') {
        const newWorryItme: WorryItem = {
          id: uuidv4(),
          worryContent: values.worryContent,
          worryExpectedDate: values.worryExpectedDate,
          worryPrepareContent: values.worryPrepareContent,
          worryStatus: '현재 걱정',
          regDate: new Date(),
        };
        console.log(newWorryItme);
        newWorryList = {
          ...worryState,
          worryList: worryList.concat(newWorryItme),
        };
      } else {
        /* 걱정수정 */
        newWorryList = {
          selectedId: '',
          worryList: worryList.map(v =>
            v.id === selectedId
              ? {
                  ...v,
                  worryContent: values.worryContent,
                  worryPrepareContent: values.worryPrepareContent,
                  worryExpectedDate: values.worryExpectedDate,
                }
              : v,
          ),
        };
      }
      setWorryState(newWorryList);
    } catch (error) {
      alert(`에러 : ${error}`);
    } finally {
      setPage('list');
    }
  }, [
    page,
    selectedId,
    setPage,
    setWorryState,
    values.worryContent,
    values.worryExpectedDate,
    values.worryPrepareContent,
    worryList,
    worryState,
  ]);

  const activeSubmitButton =
    !!values.worryContent &&
    !(error.worryContent && error.worryPrepareContent) &&
    values.worryExpectedDate !== undefined;

  return (
    <Wrapper>
      <InputBox values={values} error={error} getInputProps={getInputProps} />
      <ButtonRow>
        <NormalButton buttonType='cancel' onClick={handlePressCancel}>
          취소
        </NormalButton>
        <NormalButton
          disabled={!activeSubmitButton}
          buttonType='ok'
          onClick={handlePressSave}>
          저장
        </NormalButton>
      </ButtonRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ButtonRow = styled.div`
  :first-child {
    margin-right: 10px;
  }
  width: 100%;
  height: 65px;
  /* background-color: yellow; */
  padding-bottom: 11px;
  display: flex;
`;

export default Form;
