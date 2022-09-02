import { createIcon } from '@webb-dapp/webb-ui-components/icons/create-icon';
import React, { useMemo } from 'react';

import { LogoProps } from './types';

const defaultLogoSize = {
  width: 112,
  height: 40,
  viewBox: '0 0 112 40',
};

/**
 *
 * The Webb Logo component
 *
 * Props:
 *
 * - `size`: The logo size (default `md`)
 * - `darkMode`: Control logo dark mode using `js`, leave it's empty to control using `css`
 *
 * @example
 *
 * ```jsx
 *  <Logo size="lg" />
 *  <Logo darkMode={true} />
 * ```
 */
export const Logo: React.FC<LogoProps> = (props) => {
  const { darkMode, size = 'md', ...restProps } = props;

  const fillClassName = useMemo(
    () =>
      typeof darkMode === 'boolean'
        ? darkMode
          ? ('fill-mono-0' as const)
          : ('fill-mono-200' as const)
        : ('fill-mono-200 dark:fill-mono-0' as const),
    [darkMode]
  );

  const { height, width } = useMemo(() => {
    switch (size) {
      case 'sm': {
        return {
          width: defaultLogoSize.width * 0.5,
          height: defaultLogoSize.height * 0.5,
        };
      }

      case 'md': {
        return {
          width: defaultLogoSize.width,
          height: defaultLogoSize.height,
        };
      }

      case 'lg': {
        return {
          width: defaultLogoSize.width * 1.5,
          height: defaultLogoSize.height * 1.5,
        };
      }

      default: {
        throw new Error('Unknown Logo size');
      }
    }
  }, [size]);

  return createIcon({
    ...restProps,
    darkMode,
    path: [
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.9999 15.9988C17.7912 15.9988 15.9991 17.7891 15.9991 19.9996C15.9991 22.2084 17.7912 23.9986 19.9999 23.9986C22.2086 23.9986 24.0007 22.2084 24.0007 19.9996C24.0007 17.7891 22.2086 15.9988 19.9999 15.9988Z'
        fill='#DD4800'
      />,
      <mask
        id='mask0_163_4544'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='23'
        y='15'
        width='17'
        height='18'
      >
        <path fillRule='evenodd' clipRule='evenodd' d='M23.9998 15.9988H40V32.0003H23.9998V15.9988Z' fill='white' />
      </mask>,
      <g mask='url(#mask0_163_4544)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.0005 15.9988C33.7917 15.9988 31.9996 17.7891 31.9996 19.9996C31.9996 22.2084 30.2094 23.9986 28.0006 23.9986H26.8362C25.2752 23.9986 23.9998 25.2777 23.9998 26.8351V29.1639C23.9998 30.7249 25.2752 32.0003 26.8362 32.0003H29.165C30.7242 32.0003 31.9996 30.7249 31.9996 29.1639V28.0013C31.9996 25.7907 33.7917 23.9986 36.0005 23.9986C38.2092 23.9986 40.0013 22.2084 40.0013 19.9996C40.0013 17.7891 38.2092 15.9988 36.0005 15.9988Z'
          fill='#9F90EA'
        />
      </g>,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9996 20C15.9996 22.2087 14.2094 23.999 12.0006 23.999C14.2094 23.999 15.9996 25.7911 15.9996 27.9999C15.9996 25.7911 17.7899 23.999 20.0005 23.999C17.7899 23.999 15.9996 22.2087 15.9996 20Z'
        fill='#EAB612'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8355 15.9988H11.9999C14.2086 15.9988 15.9989 17.7891 15.9989 19.9997C15.9989 17.7891 17.791 15.9988 19.9997 15.9988C17.791 15.9988 15.9989 14.2085 15.9989 11.9998V12.0016V10.8354C15.9989 9.27619 14.7235 8.00079 13.1643 8.00079H10.8355C9.27629 8.00079 7.99908 9.27619 7.99908 10.8354V13.1624C7.99908 14.7234 9.27629 15.9988 10.8355 15.9988Z'
        fill='#DD4800'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.1634 15.9988H2.8346C1.27539 15.9988 0 17.276 0 18.837V21.164C0 22.7232 1.27539 23.9986 2.8346 23.9986H5.1634C6.72261 23.9986 7.99982 22.7232 7.99982 21.164V18.837C7.99982 17.276 6.72261 15.9988 5.1634 15.9988Z'
        fill='#4E8CDF'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.1638 32.0002H19.9994C17.7906 32.0002 16.0004 30.2099 16.0004 28.0011C16.0004 25.7906 14.2083 24.0003 11.9995 24.0003C9.79082 24.0003 8.00055 25.7906 8.00055 28.0011C8.00055 30.2099 9.79082 32.0002 11.9995 32.0002C14.2083 32.0002 16.0004 33.7904 16.0004 35.9992V37.1654C16.0004 38.7228 17.2758 40 18.835 40H21.1638C22.723 40 24.0002 38.7228 24.0002 37.1654V34.8366C24.0002 33.2756 22.723 32.0002 21.1638 32.0002Z'
        fill='#EAB612'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.8353 7.99985H19.9997C22.2084 7.99985 23.9987 9.78831 24.0005 11.9971V11.9989C24.0005 14.2076 25.7908 15.9979 28.0014 15.9979C30.2083 15.9979 32.0004 14.2076 32.0004 11.9989C32.0004 9.79013 30.2083 7.99985 28.0014 7.99985C25.7908 7.99985 24.0005 6.20958 24.0005 3.99902V4.00266V2.83461C24.0005 1.27539 22.7233 0 21.1641 0H18.8353C17.2761 0 15.9989 1.27539 15.9989 2.83461V5.16161C15.9989 6.72264 17.2761 7.99985 18.8353 7.99985Z'
        fill='#038311'
      />,
      <path
        d='M65.9754 28H62.4954L60.3114 21.016L58.2234 28H54.7674L51.4074 15.448H54.7914L56.6874 24.472L58.9674 16.432H61.7274L64.0314 24.4L66.0714 15.448H69.3114L65.9754 28ZM81.2996 26.92C80.4996 27.432 79.6836 27.784 78.8516 27.976C78.0196 28.152 77.2676 28.24 76.5956 28.24C75.6996 28.24 74.8676 28.096 74.0996 27.808C73.3476 27.52 72.6916 27.096 72.1316 26.536C71.5716 25.976 71.1316 25.288 70.8116 24.472C70.5076 23.64 70.3556 22.68 70.3556 21.592C70.3556 20.664 70.4756 19.808 70.7156 19.024C70.9556 18.24 71.3076 17.568 71.7716 17.008C72.2516 16.448 72.8436 16.008 73.5476 15.688C74.2516 15.368 75.0596 15.208 75.9716 15.208C76.8516 15.208 77.6356 15.352 78.3236 15.64C79.0276 15.928 79.6116 16.328 80.0756 16.84C80.5396 17.352 80.8916 17.952 81.1316 18.64C81.3876 19.328 81.5156 20.064 81.5156 20.848C81.5156 21.168 81.4996 21.512 81.4676 21.88C81.4356 22.232 81.3876 22.544 81.3236 22.816H73.7156C73.9076 23.744 74.2756 24.44 74.8196 24.904C75.3796 25.352 76.0916 25.576 76.9556 25.576C77.4996 25.576 78.0436 25.496 78.5876 25.336C79.1476 25.16 79.7076 24.912 80.2676 24.592L81.2996 26.92ZM78.2996 20.608C78.2676 19.76 78.0676 19.088 77.6996 18.592C77.3316 18.096 76.7716 17.848 76.0196 17.848C75.2356 17.848 74.6596 18.112 74.2916 18.64C73.9236 19.152 73.6996 19.808 73.6196 20.608H78.2996ZM86.6782 28H83.9182V10.216L87.3022 9.928V16.648C87.7982 16.232 88.3502 15.888 88.9582 15.616C89.5822 15.344 90.2542 15.208 90.9742 15.208C91.7582 15.208 92.4542 15.384 93.0622 15.736C93.6862 16.088 94.2142 16.56 94.6462 17.152C95.0782 17.728 95.4062 18.4 95.6302 19.168C95.8542 19.936 95.9662 20.736 95.9662 21.568C95.9662 22.48 95.8302 23.344 95.5582 24.16C95.3022 24.96 94.9342 25.664 94.4542 26.272C93.9742 26.88 93.3902 27.36 92.7022 27.712C92.0142 28.064 91.2462 28.24 90.3982 28.24C89.6942 28.24 89.0622 28.12 88.5022 27.88C87.9422 27.64 87.4142 27.312 86.9182 26.896L86.6782 28ZM87.3022 25.024C87.6862 25.2 88.0782 25.336 88.4782 25.432C88.8782 25.528 89.2462 25.576 89.5822 25.576C90.5902 25.576 91.3342 25.208 91.8142 24.472C92.3102 23.736 92.5582 22.784 92.5582 21.616C92.5582 20.368 92.3102 19.432 91.8142 18.808C91.3182 18.184 90.6622 17.872 89.8462 17.872C89.4302 17.872 88.9982 17.952 88.5502 18.112C88.1182 18.256 87.7022 18.44 87.3022 18.664V25.024ZM101.116 28H98.3557V10.216L101.74 9.928V16.648C102.236 16.232 102.788 15.888 103.396 15.616C104.02 15.344 104.692 15.208 105.412 15.208C106.196 15.208 106.892 15.384 107.5 15.736C108.124 16.088 108.652 16.56 109.084 17.152C109.516 17.728 109.844 18.4 110.068 19.168C110.292 19.936 110.404 20.736 110.404 21.568C110.404 22.48 110.268 23.344 109.996 24.16C109.74 24.96 109.372 25.664 108.892 26.272C108.412 26.88 107.828 27.36 107.14 27.712C106.452 28.064 105.684 28.24 104.836 28.24C104.132 28.24 103.5 28.12 102.94 27.88C102.38 27.64 101.852 27.312 101.356 26.896L101.116 28ZM101.74 25.024C102.124 25.2 102.516 25.336 102.916 25.432C103.316 25.528 103.684 25.576 104.02 25.576C105.028 25.576 105.772 25.208 106.252 24.472C106.748 23.736 106.996 22.784 106.996 21.616C106.996 20.368 106.748 19.432 106.252 18.808C105.756 18.184 105.1 17.872 104.284 17.872C103.868 17.872 103.436 17.952 102.988 18.112C102.556 18.256 102.14 18.44 101.74 18.664V25.024Z'
        className={fillClassName}
      />,
    ],
    display: 'WebbLogo',
    defaultProps: {
      width,
      height,
      fill: 'none',
      stroke: 'none',
    },
    viewBox: defaultLogoSize.viewBox,
  });
};
