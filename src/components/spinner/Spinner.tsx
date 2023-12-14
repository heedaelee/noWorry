import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const SpinnerWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  border: 1px solid #3563e9;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 10rem auto;
  animation: ${rotate} 1s linear infinite;
  /* position: absolute; */
`;

const Spinner = () => {
  return <SpinnerWrapper />;
};

export default Spinner;
