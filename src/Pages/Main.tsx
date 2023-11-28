import {useCallback, useMemo, useRef, useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';

import RoundAddButton from 'components/buttons/RoundAddButton';
import RoundFilterButton from 'components/buttons/RoundFilterButton';
import {Card as CardStyled} from 'components/card/Card';
import Dropdown from 'components/dropdown/Dropdown';
import Text from 'components/text/Text';
import {useRecoilState} from 'recoil';
import {worryListState} from 'store/worry-list';
import {
  HorizontalPaddingWrapper,
  contentsHeight,
  monthWrapper,
  switchWrapper,
} from 'styles/globalStyles';
import {WorryStatus} from 'types/common';
import {useChangePages} from '../hooks/useChagePages';
import {useOutsideClick} from '../hooks/useOutsideClick';

const Main = () => {
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const [pages, changePages] = useChangePages();
  const [worryState, setWorryState] = useRecoilState(worryListState);
  const {selectedI, worryList} = worryState;

  const [isSortActive, setIsSortActive] = useOutsideClick(
    sortDropdownRef,
    false,
  );
  const filterTextType = useMemo<Array<WorryStatus>>(() => {
    return ['현재 걱정', '일어나지 않음', '일어남'];
  }, []);
  const onClickSortBtn = useCallback(() => {
    setIsSortActive(prev => !prev);
  }, [setIsSortActive]);

  // console.log(`isSortActive : ${isSortActive}`);

  const handleFilterButtonPress = useCallback((text: string) => {
    /* TODO: 로직 */
    setFilterState(text as WorryStatus);
  }, []);

  const handleDropdownPress = useCallback(
    (text: string) => {
      /* TODO: 로직 */
      console.log(text);
      onClickSortBtn();
      // setView(!view);
    },
    [onClickSortBtn],
  );

  const handleAddButton = useCallback(() => {
    changePages('register');
  }, [changePages]);

  const handleThreeDoctsDropDownPress = useCallback(
    (text: string, data?: string) => {
      /* TODO: */
      //수정 삭제 텍스트가 올라오면 분기하셈
      console.log(text, data);
      if (text === '수정') {
        setWorryState({worryList, selectedI: data ? data : ''});
        changePages('editor');
      } else {
        alert('삭제');
      }
    },
    [changePages, setWorryState, worryList],
  );

  return (
    <HorizontalPaddingWrapper>
      {/* <Headers /> */}
      <MonthWrapper>
        <Text style={{marginRight: 10}} type='h2'>
          23년 11월
        </Text>
        {/* TODO:캘린더 달아야함 */}
        <FaChevronDown size={12} />
      </MonthWrapper>
      <SwitchWrapper>
        {filterTextType.map((text, index) => (
          <RoundFilterButton
            key={index}
            buttonText={text}
            onClick={handleFilterButtonPress}
            $isSelected={filterState === text}
          />
        ))}
        <DropdownWrapper
          ref={sortDropdownRef}
          onClick={() => {
            // setView(!view);
            onClickSortBtn();
          }}>
          <Text type='button'>최근 작성중</Text>{' '}
          <UpDonwIcon>{isSortActive ? '▲' : '▼'}</UpDonwIcon>
          {isSortActive && (
            <Dropdown
              WrapperStyle={{top: 30, left: -23, width: '130%'}}
              onClick={handleDropdownPress}
              menuTexts={['최근 작성순', '예상날짜 빠른순']}
            />
          )}
        </DropdownWrapper>
      </SwitchWrapper>
      <ContentsWrapper>
        {worryList.length === 0 ? (
          <CardStyled addButtonClick={handleAddButton} type={'NoData'} />
        ) : (
          worryList.map((cardItem, i) => (
            <CardStyled
              key={i}
              cardItem={cardItem}
              data={cardItem.id}
              dropDownClick={handleThreeDoctsDropDownPress}
            />
          ))
        )}

        <RoundAddButton onClick={handleAddButton} />
      </ContentsWrapper>
    </HorizontalPaddingWrapper>
  );
};

const MonthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${monthWrapper}px;
  /* border: 1px solid black; */
`;
const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${switchWrapper}px;
  /* margin: 25px 0px; */
  /* border: 1px solid black; */
`;
const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 62px;
  /* border: 1px solid black; */
`;
const UpDonwIcon = styled.div`
  color: #7a7a7a;
  font-size: 10px;
  margin-left: 5px;
`;
const ContentsWrapper = styled.div`
  height: ${contentsHeight}px;
  /* 아이템 사이 여백 */
  /* 
  &:last-child {
    margin-bottom: 0px;
  } 
  */
`;

export default Main;
