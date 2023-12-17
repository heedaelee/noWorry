import styled from 'styled-components';
import {contentHeight} from 'styles/globalStyles';

const Setting = () => {
  return (
    <Wrapper>
      <div>버전정보 0.0.0</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${contentHeight}px;
`;

export default Setting;
