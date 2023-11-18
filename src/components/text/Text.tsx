import styled from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
('styles/globalStyles');

interface TextProps {
  children: string;
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'sub1'
    | 'sub2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption1'
    | 'caption2';
  color?: string;
  style?: React.CSSProperties;
}

const Text = ({children, type, color, style}: TextProps) => {
  const fontFamilyType = {
    bold: 'NotoSansKR-Bold',
    medium: 'NotoSansKR-Medium',
    regular: 'NotoSansKR-Regular',
  };

  const fontType = {
    h1: {
      size: '32px',
      family: fontFamilyType.bold,
    },
    h2: {
      size: '24px',
      family: fontFamilyType.medium,
    },
    h3: {
      size: '18px',
      family: fontFamilyType.bold,
    },
    sub1: {
      size: '16px',
      family: fontFamilyType.regular,
    },
    sub2: {
      size: '14px',
      family: fontFamilyType.medium,
    },
    body1: {
      size: '16px',
      family: fontFamilyType.regular,
    },
    body2: {
      size: '14px',
      family: fontFamilyType.regular,
    },
    button: {
      size: '12px',
      family: fontFamilyType.regular,
    },
    caption1: {
      size: '12px',
      family: fontFamilyType.medium,
    },
    caption2: {
      size: '32px',
      family: fontFamilyType.regular,
    },
  };

  return (
    <TextStyled {...fontType[type]} color={color} style={style}>
      {children}
    </TextStyled>
  );
};

type textStyledType = Partial<TextProps> & {size: string; family: string};

const TextStyled = styled.div<textStyledType>`
  font-size: ${({size}) => size};
  font-family: ${({family}) => family};
  color: ${({color}) => color || GlobalStyles.ColorText.Default};
`;

export default Text;
