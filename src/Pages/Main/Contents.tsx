import styled from 'styled-components';
import {mainContentsHeight} from 'styles/globalStyles';
import {Card as CardStyled} from 'components/card/Card';
import RoundAddButton from 'components/buttons/RoundAddButton';
import {Dispatch, SetStateAction} from 'react';
import {WorryStatus} from 'types/common';

interface ContentsProps {
  worryListCompleted: Array<any>;
  handlePressAddButton: () => void;
  handleThreeDoctsDropDownPress: (
    text: string,
    data?: string,
    setIsDropdownActive?: Dispatch<SetStateAction<boolean>>,
  ) => void;
  handlePressCardButtons: (
    buttonType: 'yes' | 'no',
    currentWorryStatus: WorryStatus,
    id: string,
  ) => void;
}

const Contents = ({
  worryListCompleted,
  handlePressAddButton,
  handleThreeDoctsDropDownPress,
  handlePressCardButtons,
}: ContentsProps) => {
  return (
    <ContentsStyled>
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
    </ContentsStyled>
  );
};

const ContentsStyled = styled.div`
  height: ${mainContentsHeight}px;
  padding: 0px 2px;

  overflow-y: auto; /* 컨텐츠 부분에 대해서만 세로 스크롤 활성화 */
  & > div {
    margin-bottom: 10px; /* 여백 크기 조절 가능 */
  }
`;
export default Contents;
