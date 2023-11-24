import InputBox from 'components/input/InputBox';
import styled from 'styled-components';

const Form = () => {
  return (
    <Wrapper>
      <InputBox />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

/* const TextareaStyled = styled.textarea<{$row: number}>`
  width: 100%;
  height: ${({$row}) => 4 * $row + 4}px;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`; */
export default Form;
