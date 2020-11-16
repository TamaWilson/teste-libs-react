import { css } from 'styled-components';

import {
  PublicSansMedium,
  PublicSansRegular,
  PublicSansSemiBold,
  PublicSansBold
} from './public-sans';

export const PublicSansFontFace = css`
  @font-face {
    font-family: 'PublicSans-Medium';
    src: url('${PublicSansMedium}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansRegular}');
  }
  @font-face {
    font-family: 'PublicSans-Regular';
    src: url('${PublicSansSemiBold}');
  }
  @font-face {
    font-family: 'PublicSans-Bold';
    src: url('${PublicSansBold}');
  }
`;
