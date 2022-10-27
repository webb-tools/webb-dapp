import { createIcon } from '@nepoche/icons/create-icon';
import React, { useMemo } from 'react';

import { LogoProps } from './types';

const defaultLogoSize = {
  width: 96,
  height: 29,
  viewBox: '0 0 96 29',
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
        d='M11.53 14.475v1.597c0 1.07.875 1.946 1.946 1.946h1.597c1.07 0 1.947-.876 1.947-1.946v-1.597c0-1.07-.876-1.947-1.947-1.947h-1.597a1.953 1.953 0 00-1.947 1.947z'
        fill='#B5A9F2'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.53 9.509c0 1.563-1.23 2.833-2.744 2.833-1.513 0-2.742 1.27-2.742 2.842 0 1.564-1.23 2.834-2.753 2.834-1.513 0-2.742-1.27-2.742-2.834 0-1.572 1.23-2.842 2.742-2.842 1.523 0 2.753-1.27 2.753-2.833 0-1.565-1.23-2.834-2.753-2.834h-.797c-1.067 0-1.945-.908-1.945-2.01V3.008c0-1.101.878-2.01 1.945-2.01h1.603c1.068 0 1.947.909 1.947 2.01v.833c0 1.564 1.229 2.834 2.742 2.834 1.514 0 2.743 1.27 2.743 2.834z'
        fill='#DD4800'
      />,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.02 25.45v1.604c0 1.066-.909 1.945-2.01 1.945h-1.656c-1.102 0-2.01-.879-2.01-1.945v-.798c0-1.522-1.27-2.752-2.835-2.752-1.563 0-2.833 1.23-2.833 2.752C5.676 27.77 4.406 29 2.833 29 1.27 28.999 0 27.77 0 26.256c0-1.522 1.27-2.752 2.833-2.752 1.573 0 2.843-1.228 2.843-2.742v-.798c0-1.075.9-1.946 2.01-1.946h1.648c1.11 0 2.01.87 2.01 1.946v.798c0 1.514 1.27 2.742 2.833 2.742h.833c1.101 0 2.01.88 2.01 1.946z'
        fill='#007D0D'
      />,
      <mask
        id='prefix__a'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={17}
        y={11}
        width={11}
        height={18}
      >
        <path d='M17.02 11.98H28v17.019H17.02v-17.02z' fill='#fff' />
      </mask>,
      <g mask='url(#prefix__a)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28 26.166c0 1.563-1.229 2.833-2.751 2.833-1.514 0-2.743-1.27-2.743-2.833 0-1.573-1.23-2.844-2.743-2.844h-.799c-1.073 0-1.944-.898-1.944-2.01v-1.647c0-1.11.87-2.01 1.944-2.01h.799c1.514 0 2.743-1.27 2.743-2.834 0-1.572 1.229-2.842 2.743-2.842 1.522 0 2.751 1.27 2.751 2.843 0 1.563-1.229 2.833-2.751 2.833-1.514 0-2.743 1.27-2.743 2.834s1.229 2.833 2.743 2.833c1.522 0 2.751 1.271 2.751 2.844z'
          fill='#67A0EE'
        />
      </g>,
      <mask
        id='prefix__b'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={10}
        y={0}
        width={18}
        height={12}
      >
        <path d='M10.98.999H28v10.98H10.98V1z' fill='#fff' />
      </mask>,
      <g mask='url(#prefix__b)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M28 2.944v1.604c0 1.066-.908 1.945-2.01 1.945h-.832c-1.564 0-2.834 1.229-2.834 2.743 0 1.513-1.27 2.743-2.834 2.743s-2.833-1.23-2.833-2.743c0-1.514-1.27-2.743-2.843-2.743h-.825c-1.1 0-2.009-.88-2.009-1.945V2.944c0-1.066.909-1.945 2.01-1.945h1.657c1.101 0 2.01.879 2.01 1.945v.806c0 1.514 1.27 2.743 2.833 2.743 1.564 0 2.834-1.229 2.834-2.743v-.806c0-1.066.908-1.945 2.01-1.945h1.656c1.102 0 2.01.879 2.01 1.945z'
          fill='#F4C328'
        />
      </g>,
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M49.875 20.26v.056c0 .007-.022.011-.068.011-.03 0-.045-.004-.045-.011 0-.007-.007-.018-.022-.034l-1.644-6.43c-.195-.77-.515-1.349-.957-1.735-.444-.385-1.018-.578-1.724-.578-.69 0-1.26.197-1.712.59-.45.393-.788.982-1.013 1.768l-1.645 6.385c.015 0 .02.004.012.011-.008.009-.027.012-.056.012-.031 0-.05-.003-.057-.012-.008-.007-.011-.018-.011-.033l-1.937-8.387H36l2.14 8.988c.135.519.35.953.642 1.302.293.348.638.608 1.036.778.398.17.8.256 1.205.256.645 0 1.205-.193 1.678-.578.473-.386.807-.971 1.002-1.758l1.668-6.564c-.016-.014-.009-.021.022-.021.045 0 .06.007.045.021l1.666 6.564c.195.787.53 1.372 1.003 1.758.473.385 1.033.578 1.678.578.406 0 .807-.086 1.206-.256a2.76 2.76 0 001.035-.778c.293-.35.499-.783.62-1.302l2.05-8.988h-2.952l-1.869 8.387zM92.11 18.791c-.24.431-.574.776-1.002 1.035-.428.26-.92.39-1.475.39-.54 0-1.026-.13-1.453-.39a2.86 2.86 0 01-1.014-1.035 2.75 2.75 0 01-.372-1.4c0-.52.124-.998.373-1.436a2.763 2.763 0 011.013-1.035 2.817 2.817 0 011.453-.378c.556 0 1.047.127 1.475.378.428.253.762.598 1.002 1.035.24.438.361.916.361 1.436 0 .504-.12.97-.36 1.4zm2.816-4.438a5.256 5.256 0 00-2.061-2.057c-.878-.49-1.896-.734-3.052-.734-.81 0-1.562.177-2.252.533-.28.143-.53.311-.767.494V6.8h-3.198v10.59c0 1.112.262 2.107.789 2.982a5.665 5.665 0 002.15 2.069c.908.503 1.94.756 3.098.756 1.155 0 2.188-.264 3.097-.79a5.902 5.902 0 002.151-2.114c.525-.882.788-1.85.788-2.902 0-1.143-.247-2.155-.743-3.038zM58.885 16.233c.09-.37.245-.708.462-1.012.218-.304.503-.545.856-.723.353-.178.762-.267 1.228-.267.45 0 .848.086 1.194.256.345.17.627.409.844.712.218.304.35.649.395 1.034h-4.979zm5.587-3.993c-.826-.512-1.832-.768-3.019-.768-1.141 0-2.148.264-3.018.79a5.6 5.6 0 00-2.039 2.114 5.903 5.903 0 00-.732 2.903c0 1.172.263 2.2.79 3.081a5.53 5.53 0 002.172 2.07c.924.496 1.964.744 3.12.744 1.186 0 2.226-.27 3.12-.811.894-.542 1.58-1.31 2.061-2.303l-2.455-1.224a2.782 2.782 0 01-1.115 1.18 3.205 3.205 0 01-1.633.422c-.63 0-1.175-.136-1.634-.412a2.753 2.753 0 01-1.058-1.145 3.025 3.025 0 01-.281-.89h8.289v-.935a5.902 5.902 0 00-.665-2.78 5.194 5.194 0 00-1.903-2.036zM77.897 18.791c-.24.431-.575.776-1.003 1.035-.427.26-.92.39-1.475.39-.54 0-1.025-.13-1.453-.39a2.861 2.861 0 01-1.013-1.035 2.75 2.75 0 01-.372-1.4c0-.52.123-.998.372-1.436a2.764 2.764 0 011.013-1.035 2.817 2.817 0 011.453-.378c.556 0 1.048.127 1.475.378.428.253.763.598 1.003 1.035.24.438.36.916.36 1.436 0 .504-.12.97-.36 1.4zm.754-6.495c-.878-.49-1.895-.734-3.052-.734-.81 0-1.562.177-2.252.533-.279.143-.53.311-.766.494V6.8h-3.199v10.59c0 1.112.263 2.107.789 2.982a5.665 5.665 0 002.151 2.069c.908.503 1.94.756 3.097.756 1.156 0 2.188-.264 3.097-.79a5.902 5.902 0 002.152-2.114c.524-.882.788-1.85.788-2.902 0-1.143-.248-2.155-.744-3.038a5.257 5.257 0 00-2.06-2.057z'
        className={fillClassName}
      />,
    ],
    displayName: 'WebbLogo',
    defaultProps: {
      width,
      height,
      fill: 'none',
      stroke: 'none',
    },
    viewBox: defaultLogoSize.viewBox,
  });
};
