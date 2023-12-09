import {ComponentProps, FunctionComponent, useCallback} from 'react';
import {useRecoilState} from 'recoil';
import {modalOpenAtom} from 'store/modals-open';

/* TODO: 구현 다 되면 공통 타입 모듈로 묶어두기
export type openModalType = <T extends FunctionComponent<any>>(
  Component: T,
  props: Omit<ComponentProps<T>, 'open'>, // open 프로퍼티는 커스터마이징 해줌
) => void;

export type closeModalType = <T extends FunctionComponent<any>>(
  Component: T,
) => void;
*/

const useModals = () => {
  // 모달들의 list를 보관하는 state.
  const [modals, setModals] = useRecoilState(modalOpenAtom);

  /**
   * 인자로 모달을 받으면 이를 모달 목록에 (배열의 요소로) 추가하기
   * 인자는 (오픈할 모달 정보 객체, 컴포넌트 형태로 들어감)
   * @param (component, props)
   */
  const openModal = useCallback(
    <T extends FunctionComponent<any>>(
      Component: T,
      props: Omit<ComponentProps<T>, 'open'>,
    ) => {
      setModals(modalsPrev => [
        ...modalsPrev,
        {Component, props: {...props, open: true}},
      ]);
    },
    [setModals],
  );

  /**
   * @param
   */
  const closeModal = useCallback(
    <T extends FunctionComponent<any>>(Component: T) => {
      setModals(modalsPrev =>
        modalsPrev.filter(modal => modal.Component !== Component),
      );
    },
    [setModals],
  );

  return {modals, openModal, closeModal};
};

export default useModals;
