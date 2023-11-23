import {useCallback, useMemo, useRef, useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';

import RoundAddButton from 'components/buttons/RoundAddButton';
import RoundFilterButton from 'components/buttons/RoundFilterButton';
import Dropdown from 'components/dropdown/Dropdown';
import Headers from 'components/headers/Headers';
import Text from 'components/text/Text';
import {WorryStatus} from 'store/worry-list';
import {
  HorizontalPaddingWrapper,
  contentsHeight,
  monthWrapper,
  switchWrapper,
} from 'styles/globalStyles';
import {useOutsideClickType} from '../hooks/useOutsideClick';
import {useChangePages} from '../hooks/useChagePages';

const Main = () => {
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const [pages, changePages] = useChangePages();

  const [isSortActive, setIsSortActive] = useOutsideClickType(
    sortDropdownRef,
    false,
  );
  // console.log(`isSortActive : ${isSortActive}`);

  const onClickSortBtn = useCallback(() => {
    setIsSortActive(prev => !prev);
  }, [setIsSortActive]);

  const filterTextType = useMemo<Array<WorryStatus>>(() => {
    return ['현재 걱정', '일어나지 않음', '일어남'];
  }, []);

  const handleFilterButtonPress = useCallback((text: string) => {
    /* TODO: 로직 */
    setFilterState(text as WorryStatus);
  }, []);

  const handleDropdownPress = useCallback((text: string) => {
    /* TODO: 로직 */
    console.log(text);
    onClickSortBtn();
    // setView(!view);
  }, []);

  const handleAddButton = useCallback(() => {
    changePages('register');
  }, []);

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
              onClick={handleDropdownPress}
              menuTexts={['최근 작성순', '예상날짜 빠른순']}
            />
          )}
        </DropdownWrapper>
      </SwitchWrapper>
      <ContentsWrapper>
        {/* 데이터 없을 때 */}
        <Card>
          <Text
            type='sub2'
            style={{
              whiteSpace: 'pre-wrap',
            }}>{`+ 버튼을 눌러서\n지금의 걱정을 기록해 보세요.`}</Text>
        </Card>
        {/* TODO:데이터 있을 때 */}

        {/* 데이터 있을 때  끝*/}

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
  /* display: flex;
  justify-content: center; */
  /* border: 1px solid black; */
  height: ${contentsHeight}px;
  /* 아이템 사이 여백 */
  &:last-child {
    margin-bottom: 0px;
  }
`;
const Card = styled.div`
  max-width: 390px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  border-radius: 16px;
`;

export default Main;
