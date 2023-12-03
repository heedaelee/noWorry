import React, {Suspense, lazy} from 'react';

import Text from 'components/text/Text';
import {GlobalStyles} from 'styles/globalStyles';
import useModals from 'hooks/useModals';

/* 코드스플리팅, 동적import */
const ConfirmModal = lazy(() => import('./ConfirmModal'));
const DatePickerModal = lazy(() => import('./DatePickerModal'));

/* 사용할 전체 모달 컴포넌트를 담은 객체 */
export const modals = {
  confirm: ConfirmModal,
  datePicker: DatePickerModal,
};

/* 로딩 TODO: 추후 수정 */
const Loading = (
  <Text color={GlobalStyles.ColorText.SubText} type='h3'>
    Loading ....
  </Text>
);

/**
 * Modals 컴포넌트는 <Recoil> 자식,  <App /> 상단에 위치해
 * <App /> 이전에 전체 모달들을 호출한다.
 */
const Modals = () => {
  const {modals} = useModals();

  return (
    <>
      {modals.map(({Component, props}, index) => {
        return (
          <Suspense key={index} fallback={Loading}>
            <Component {...props} />
          </Suspense>
        );
      })}
    </>
  );
};

export default Modals;
