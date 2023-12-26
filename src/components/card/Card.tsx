import {BsThreeDots} from '@react-icons/all-files/bs/BsThreeDots';
import {FaLightbulb} from '@react-icons/all-files/fa/FaLightbulb';
import {FaRegCalendarCheck} from '@react-icons/all-files/fa/FaRegCalendarCheck';
import {IoAccessibilityOutline} from '@react-icons/all-files/io5/IoAccessibilityOutline';
import Dropdown from 'components/dropdown/Dropdown';
import Text from 'components/text/Text';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Dispatch, useCallback, useRef} from 'react';
import styled from 'styled-components';
import {GlobalStyles, mainPadding} from 'styles/globalStyles';
import {WorryItem, onCardButtonsClick} from 'types/common';
import {fullDayFormat, yearMonthDay} from 'utils/data';
import Buttons from './buttons/Buttons';

interface CardProps {
  addButtonClick?: () => void;
  dropDownClick?: (
    text: string,
    data?: string,
    setIsDropdownActive?: Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  onCardButtonsClick?: onCardButtonsClick;
  cardItem?: WorryItem;
  type?: 'NoData' | 'Default';
  style?: React.CSSProperties;
  id: string;
}

export const Card = ({
  cardItem,
  type = 'Default',
  addButtonClick,
  dropDownClick,
  onCardButtonsClick,
  style,
  id,
}: CardProps) => {
  const threeDotsDropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownActive, setIsDropdownActive] = useOutsideClick(
    threeDotsDropdownRef,
    false,
  );
  const onClickThreeDots = useCallback(() => {
    setIsDropdownActive(prev => !prev);
  }, [setIsDropdownActive]);

  return (
    <CardStyled style={style}>
      {type === 'Default' && cardItem ? (
        <Inner>
          <TopRow>
            <Text
              style={{flex: 9}}
              color={GlobalStyles.ColorText.SubText}
              type='button'>
              {fullDayFormat(cardItem.regDate)}
            </Text>
            <ThreeDotsWrapper ref={threeDotsDropdownRef}>
              <BsThreeDots style={{flex: 1}} onClick={onClickThreeDots} />
              {isDropdownActive && dropDownClick && (
                <Dropdown
                  WrapperStyle={{
                    top: 20,
                    left: -43,
                    width: 65,
                  }}
                  ButtonStyle={{textAlign: 'center'}}
                  onClick={dropDownClick}
                  menuTexts={['수정', '삭제']}
                  data={id}
                  passFunction={setIsDropdownActive}
                />
              )}
            </ThreeDotsWrapper>
          </TopRow>
          <MiddleRow>
            <ContentRow>
              <IconWrapper>
                <IoAccessibilityOutline size={15} />
              </IconWrapper>
              <Text type='button'>{cardItem.worryContent}</Text>
            </ContentRow>
            <ContentRow>
              <IconWrapper>
                <FaLightbulb size={15} />
              </IconWrapper>
              <Text type='button'>
                {cardItem.worryPrepareContent
                  ? cardItem.worryPrepareContent
                  : 'X'}
              </Text>
            </ContentRow>
          </MiddleRow>
          <BottomRow>
            <ExpectedDayRow>
              <IconWrapper>
                <FaRegCalendarCheck size={15} />
              </IconWrapper>
              <Text type='caption3'>{`예상 날짜 ${
                cardItem.worryExpectedDate!
                  ? yearMonthDay(cardItem.worryExpectedDate)
                  : '모르겠어요'
              }`}</Text>
            </ExpectedDayRow>
            <QuestionRow>
              <Text
                style={{
                  marginRight: 5,
                  display: 'flex',
                  flex: 6,
                  justifyContent: 'flex-end',
                }}
                type='caption3'>
                걱정한 일이 일어났나요?
              </Text>
              <ButtonsRow>
                <Buttons
                  id={id}
                  onCardButtonsClick={onCardButtonsClick}
                  type={cardItem.worryStatus}
                />
              </ButtonsRow>
            </QuestionRow>
          </BottomRow>
        </Inner>
      ) : (
        <Text
          onClick={addButtonClick}
          type='sub2'
          style={{
            whiteSpace: 'pre-wrap',
          }}>
          {`+ 버튼을 눌러서\n지금의 걱정을 기록해 보세요.`}
        </Text>
      )}
    </CardStyled>
  );
};

const CardStyled = styled.div`
  display: flex;
  max-width: ${390 - 2 * (mainPadding + 10)}px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: white;
  justify-content: center;
  border-radius: 16px;
`;
const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
const MiddleRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconWrapper = styled.div`
  margin-right: 5px;
`;
const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
const ExpectedDayRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 5;
  align-items: center;
`;
const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 6;
  align-items: center;
`;
const ButtonsRow = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const ThreeDotsWrapper = styled.div`
  position: relative;
  flex-direction: row;
`;
