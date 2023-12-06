import styled from 'styled-components';
import {
  HeightBetweenHeaderAndContents,
  HorizontalPaddingWrapper,
} from 'styles/globalStyles';

const Statics = () => {
  return (
    <HorizontalPaddingWrapper>
      <StaticsHeader></StaticsHeader>
    </HorizontalPaddingWrapper>
  );
};

const StaticsHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: ${HeightBetweenHeaderAndContents}px;
  align-items: center;
  /* border: 1px solid black; */
`;

export default Statics;
