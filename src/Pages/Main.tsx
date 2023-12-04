import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import styled from 'styled-components';

import RoundAddButton from 'components/buttons/RoundAddButton';
import RoundFilterButton from 'components/buttons/RoundFilterButton';
import {Card as CardStyled} from 'components/card/Card';
import Dropdown from 'components/dropdown/Dropdown';
import {modals} from 'components/modals/Modals';
import Text from 'components/text/Text';
import useFilter from 'hooks/useFilter';
import useModals from 'hooks/useModals';
import {useRecoilState} from 'recoil';
import {worryListState} from 'store/worry-list';
import {
  HorizontalPaddingWrapper,
  contentsHeight,
  monthWrapper,
  switchWrapper,
} from 'styles/globalStyles';
import {WorryItem, WorryStatus, sortMenuType} from 'types/common';
import {useChangePages} from '../hooks/useChagePages';
import {useOutsideClick} from '../hooks/useOutsideClick';
import {yearMonth, yearMonthDay} from 'utils/data';

const Main = () => {
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const [pages, changePages] = useChangePages();
  const [worryState, setWorryState] = useRecoilState(worryListState);
  const {selectedId, worryList} = worryState;
  const {closeModal, openModal} = useModals();
  const [loading, setLoading] = useState(false);
  const [isSortActive, setIsSortActive] = useOutsideClick(
    sortDropdownRef,
    false,
  );

  const filterTextType = useMemo<Array<WorryStatus>>(() => {
    return ['현재 걱정', '일어나지 않음', '일어남'];
  }, []);
  /* 정렬필터 hook */
  const [
    filterState,
    setFilterState,
    sortState,
    setSortState,
    calendarDate,
    setCalendaDate,
    worryListCompleted,
  ] = useFilter(worryList);

  console.log(calendarDate);

  /* TODO: 최근 작성중 sort */
  const onClickSortBtn = useCallback(() => {
    /* sort 열고 닫기 */
    setIsSortActive(prev => !prev);
  }, [setIsSortActive]);

  const onDelete = useCallback(
    (id: string) => {
      try {
        const newWorryState = {
          selectedId: '',
          worryList: worryList.filter(value => value.id !== id),
        };
        setWorryState(newWorryState);
        setLoading(false);
      } catch (error) {
        alert(`에러 : ${error}`);
      } finally {
        setLoading(false);
        changePages('list');
      }
    },
    [changePages, setWorryState, worryList],
  );

  const handleFilterButtonPress = useCallback(
    (worryStatus: WorryStatus) => {
      /* TODO: 로직 */
      console.log(worryStatus);
      setFilterState(worryStatus);
    },
    [setFilterState],
  );

  const handleDropdownPress = useCallback(
    (menuTypeText: string) => {
      /* TODO: 로직 */
      onClickSortBtn();
      console.log(menuTypeText);
      setSortState(menuTypeText as sortMenuType);
    },
    [onClickSortBtn, setSortState],
  );

  const handlePressAddButton = useCallback(() => {
    changePages('register');
  }, [changePages]);

  const handleThreeDoctsDropDownPress = useCallback(
    (
      text: string,
      data?: string,
      setIsDropdownActive?: Dispatch<SetStateAction<boolean>>,
    ) => {
      setWorryState({worryList, selectedId: data ? data : ''});
      if (text === '수정') {
        changePages('editor');
      } else {
        /* 삭제 로직 */
        setIsDropdownActive && setIsDropdownActive(false);
        openModal(modals.confirm, {
          message:
            '기록을 삭제하시겠습니까?\n삭제한 기록은 복구할 수 없습니다.',
          onConfirmButtonClick: () => {
            data && onDelete(data);
            closeModal(modals.confirm);
          },
          onCancelButtonClick: () => closeModal(modals.confirm),
        });
      }
    },
    [changePages, closeModal, onDelete, openModal, setWorryState, worryList],
  );

  const handlePressCardButtons = useCallback(
    (buttonType: 'yes' | 'no', currentWorryStatus: WorryStatus, id: string) => {
      console.log(id, currentWorryStatus, buttonType);

      if (
        (buttonType === 'yes' && currentWorryStatus === '일어남') ||
        (buttonType === 'no' && currentWorryStatus == '일어나지 않음')
      ) {
        return;
      }

      const worryNewArray = worryList.map((v: WorryItem, i) => {
        return v.id === id
          ? {
              ...v,
              worryStatus:
                buttonType === 'yes'
                  ? ('일어남' as WorryStatus)
                  : ('일어나지 않음' as WorryStatus),
            }
          : v;
      });
      setWorryState({selectedId: '', worryList: worryNewArray});
    },
    [setWorryState, worryList],
  );

  const handleDatePickerPress = useCallback(() => {
    openModal(modals.datePicker, {
      message: '언제로 이동할까요?',
      onConfirmButtonClick: (date: Date) => {
        setCalendaDate(date);
        closeModal(modals.datePicker);
      },
      onCancelButtonClick: () => closeModal(modals.datePicker),
    });
  }, [closeModal, openModal]);

  return (
    <HorizontalPaddingWrapper>
      {/* <Headers /> */}
      <MonthWrapper onClick={handleDatePickerPress}>
        <Text style={{marginRight: 10}} type='h2'>
          {yearMonth(calendarDate)}
        </Text>
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
        {worryListCompleted.length === 0 ? (
          <CardStyled
            id={''}
            addButtonClick={handlePressAddButton}
            type={'NoData'}
          />
        ) : (
          worryListCompleted.map((cardItem, i) => (
            <CardStyled
              key={i}
              cardItem={cardItem}
              id={cardItem.id}
              dropDownClick={handleThreeDoctsDropDownPress}
              onCardButtonsClick={handlePressCardButtons}
            />
          ))
        )}

        <RoundAddButton onClick={handlePressAddButton} />
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
  padding: 0px 2px;

  overflow-y: auto; /* 컨텐츠 부분에 대해서만 세로 스크롤 활성화 */
  & > div {
    margin-bottom: 10px; /* 여백 크기 조절 가능 */
  }
`;

export default Main;
