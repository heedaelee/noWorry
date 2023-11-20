import styled from 'styled-components';
import {RxGear} from 'react-icons/rx';
import Text from 'components/text/Text';
import GlobalStyles from 'styles/globalStyles';
import {FaChevronDown} from 'react-icons/fa';
import {useCallback, useMemo, useRef, useState} from 'react';
import RoundFilterButton from 'components/buttons/RoundFilterButton';
import {WorryStatus} from 'store/worry-list';
import Dropdown from 'components/dropdown/Dropdown';
import {useOutsideClickType} from './useOutsideClick';

const Main = () => {
  const [filterState, setFilterState] = useState<WorryStatus>('현재 걱정');
  // const [view, setView] = useState<boolean>(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const [isSortActive, setIsSortActive] = useOutsideClickType(
    sortDropdownRef,
    false,
  );
  console.log(`isSortActive : ${isSortActive}`);

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

  return (
    <Wrapper>
      <HeadWrapper>
        <Text type='h1'>나의 걱정들</Text>
        <RxGear size={28} />
      </HeadWrapper>
      <MonthWrapper>
        <Text style={{marginRight: 10}} type='h3'>
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
      <CardListWrapper>본문</CardListWrapper>
      <BottomTapWrapper>하단탭</BottomTapWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  padding: 16px 16px 0px 16px;
  background-color: ${GlobalStyles.backgroundColor};
`;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  /* border: 1px solid black; */
`;
const MonthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 16px; */
  /* border: 1px solid black; */
`;
const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0px;
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
const CardListWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;
const BottomTapWrapper = styled.div`
  display: flex;
  justify-content: row;
  height: 54px;
  width: 100%;
  border: 1px solid black;
`;

export default Main;
