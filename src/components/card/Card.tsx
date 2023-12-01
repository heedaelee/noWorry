import Dropdown from 'components/dropdown/Dropdown';
import Text from 'components/text/Text';
import {useOutsideClick} from 'hooks/useOutsideClick';
import {Dispatch, useCallback, useRef} from 'react';
import {BsThreeDots} from 'react-icons/bs';
import styled from 'styled-components';
import {GlobalStyles, mainPadding} from 'styles/globalStyles';
import {WorryItem} from 'types/common';
import {fullDayFormat, yearMonth} from 'utils/data';
import {CiCalendar} from 'react-icons/ci';
import {FaLightbulb, FaPersonCircleQuestion} from 'react-icons/fa6';
import Buttons from './buttons/Buttons';

interface CardProps {
  addButtonClick?: () => void;
  dropDownClick?: (
    text: string,
    data?: string,
    setIsDropdownActive?: Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  cardItem?: WorryItem;
  type?: 'NoData' | 'Default';
  style?: React.CSSProperties;
  data?: string;
}

export const Card = ({
  cardItem,
  type = 'Default',
  addButtonClick,
  dropDownClick,
  style,
  data,
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
                  data={data}
                  passFunction={setIsDropdownActive}
                />
              )}
            </ThreeDotsWrapper>
          </TopRow>
          <MiddleRow>
            <ContentRow>
              <IconWrapper>
                <FaPersonCircleQuestion size={15} />
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
                <CiCalendar size={15} />
              </IconWrapper>
              <Text type='caption3'>{`예상 날짜 ${
                cardItem.worryExpectedDate!
                  ? yearMonth(cardItem.worryExpectedDate)
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
                <Buttons type={cardItem.worryStatus} />
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
  border-radius: 16px;
`;
const Inner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* background-color: yellow; */
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
  flex: 4;
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
