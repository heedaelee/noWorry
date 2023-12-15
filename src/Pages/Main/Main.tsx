import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import {modals} from 'components/modals/Modals';
import useFilter from 'hooks/useFilter';
import useModals from 'hooks/useModals';
import {useRecoilState} from 'recoil';
import {worryListState} from 'store/worry-list';
import {HorizontalPaddingWrapper} from 'styles/globalStyles';
import {WorryItem, WorryStatus, sortMenuType} from 'types/common';
import useDatePickerButtonPress from 'hooks/useDatePickerButtonPress';
import {useChangePages} from '../../hooks/useChagePages';
import {useOutsideClick} from '../../hooks/useOutsideClick';
import Contents from './Contents';
import Months from './Months';
import Switch from './Switch';

const Main = () => {
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const [pages, changePages] = useChangePages();
  const [worryState, setWorryState] = useRecoilState(worryListState);
  const {worryList} = worryState;
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

  const {handleDatePickerPress} = useDatePickerButtonPress({
    openModal,
    closeModal,
    setCalendaDate,
  });

  /* sort 열고 닫기 */
  let lastCalled = 0; // 마지막 호출 시간_디바운싱
  const onClickSortBtn = useCallback(() => {
    /**
     * 중복호출방지 : 디바운싱
     * 1초 내에 중복 호출 방지, 1초 후에 호출이면 now - lastCalled > 1000 이므로 호출 진행
     */
    const now = Date.now();
    if (now - lastCalled < 1000) {
      return;
    }
    setIsSortActive(prev => {
      return !prev;
    });
    lastCalled = now;
  }, [isSortActive, setIsSortActive]);

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
      setFilterState(worryStatus);
    },
    [setFilterState],
  );

  const handleDropdownPress = useCallback(
    (menuTypeText: string) => {
      setSortState(menuTypeText as sortMenuType);
      onClickSortBtn();
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

  return (
    <HorizontalPaddingWrapper>
      <Months
        calendarDate={calendarDate}
        handleDatePickerPress={handleDatePickerPress}
      />
      <Switch
        filterTextType={filterTextType}
        filterState={filterState}
        onClickSortBtn={onClickSortBtn}
        handleFilterButtonPress={handleFilterButtonPress}
        handleDropdownPress={handleDropdownPress}
        sortDropdownRef={sortDropdownRef}
        isSortActive={isSortActive}
      />
      <Contents
        worryListCompleted={worryListCompleted}
        handlePressAddButton={handlePressAddButton}
        handleThreeDoctsDropDownPress={handleThreeDoctsDropDownPress}
        handlePressCardButtons={handlePressCardButtons}
      />
    </HorizontalPaddingWrapper>
  );
};

export default Main;
