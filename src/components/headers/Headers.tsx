import {IoIosArrowBack} from 'react-icons/io';
import styled from 'styled-components';

import Text from 'components/text/Text';
import {headerConstant} from 'constants/header-constant';
import {useChangePages} from 'hooks/useChagePages';
import {headWrapper, mainPadding} from 'styles/globalStyles';
import {useCallback} from 'react';

const Headers = () => {
  const [pages, setPages] = useChangePages();
  const {page: pageConstants} = headerConstant;

  /* page랑 page상수값이랑 일치할때, title,Icon 가져옴 */
  const {title, ...Others} = pageConstants[pages];
  const isActiveBackButton = ['register', 'editor', 'setting'].includes(pages);

  const handleBackButtonPress = useCallback(() => {
    setPages('list');
  }, []);

  return (
    <HeadWrapper $isActiveBackButton={isActiveBackButton}>
      {isActiveBackButton && (
        <BackButton onClick={handleBackButtonPress}>
          <IoIosArrowBack size='25px' color='#00201C' />
        </BackButton>
      )}
      <Text type='h1'>{title}</Text>
      {Others.IconComponent && <Others.IconComponent />}
    </HeadWrapper>
  );
};

export default Headers;

const HeadWrapper = styled.div<{$isActiveBackButton: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({$isActiveBackButton}) =>
    $isActiveBackButton ? 'center' : 'space-between'};
  align-items: center;
  height: ${headWrapper}px;
  padding: ${mainPadding}px ${mainPadding}px 0px ${mainPadding}px;
  /* border: 1px solid black; */
`;

const BackButton = styled.button`
  position: absolute;
  left: ${mainPadding}px;
  padding: 0px;
  text-align: center;
  border: none;
  background-color: #f5f5f5;
`;
