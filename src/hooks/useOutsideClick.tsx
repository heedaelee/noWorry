import {useEffect, useState, Dispatch, SetStateAction} from 'react';
// 선택된 요소(el), Active 초기값(initialState)을 넘겨받는다.
type UseOutsideClickType = (
  element: React.RefObject<HTMLDivElement>,
  initialState: boolean,
) => [boolean, Dispatch<SetStateAction<boolean>>];

export const useOutsideClickType: UseOutsideClickType = (
  element,
  initialState,
) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    /**
     * e.target 이 아닌 이벤트에 클릭이 포함되면, active를 반대로 토글한다
     * 드롭다운메뉴 클릭시엔, 드롭다운이 사라질 필요가 없는게, 어차피 정렬메뉴라 리랜더링이 일어나 기본값 false가 적용됨
     * 만약 드롭다운 클릭시에도 창을 닫고 싶으면 .contains() 부분을 빼면 됨
     */
    const pageClickEvent = (e: MouseEvent) => {
      if (
        element.current !== null &&
        !element.current.contains(e.target as Node | null)
      ) {
        console.log('반응');
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  });
  return [isActive, setIsActive];
};
