import {
  ComponentProps,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
} from 'react';
import {modals} from 'components/modals/Modals';

interface useDatePickerButtonPressProps {
  openModal: <T extends FunctionComponent<any>>(
    Component: T,
    props: Omit<ComponentProps<T>, 'open'>, // open 프로퍼티는 커스터마이징 해줌
  ) => void;
  closeModal: <T extends FunctionComponent<any>>(Component: T) => void;
  setCalendaDate: Dispatch<SetStateAction<Date>>;
}

const useDatePickerButtonPress = ({
  openModal,
  closeModal,
  setCalendaDate,
}: useDatePickerButtonPressProps) => {
  const handleDatePickerPress = useCallback(() => {
    openModal(modals.datePicker, {
      message: '언제로 이동할까요?',
      onConfirmButtonClick: (date: Date) => {
        setCalendaDate(date);
        closeModal(modals.datePicker);
      },
      onCancelButtonClick: () => closeModal(modals.datePicker),
    });
  }, [closeModal, openModal, setCalendaDate]);

  return {handleDatePickerPress};
};

export default useDatePickerButtonPress;
