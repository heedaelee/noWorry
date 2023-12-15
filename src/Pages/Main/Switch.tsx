import RoundFilterButton from 'components/buttons/RoundFilterButton';
import Dropdown from 'components/dropdown/Dropdown';
import Text from 'components/text/Text';
import styled from 'styled-components';
import {switchWrapper} from 'styles/globalStyles';
import {WorryStatus} from 'types/common';

interface SwitchProps {
  onClickSortBtn: () => void;
  isSortActive: boolean;
  handleDropdownPress: (text: string) => void;
  sortDropdownRef: React.RefObject<HTMLDivElement>;
  handleFilterButtonPress: (text: WorryStatus) => void;
  filterTextType: Array<WorryStatus>;
  filterState: string;
}

const Switch = ({
  onClickSortBtn,
  isSortActive,
  handleDropdownPress,
  sortDropdownRef,
  handleFilterButtonPress,
  filterTextType,
  filterState,
}: SwitchProps) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default Switch;
