import { createIcon } from '@webb-tools/icons/create-icon';
import React, { useMemo } from 'react';

import { TangleLogoProps } from './types';

const defaultTangleLogoSize = {
  width: 114,
  height: 28,
  viewBox: '0 0 114 28',
};

export const TangleLogo: React.FC<TangleLogoProps> = (props) => {
  const { darkMode, size = 'md', ...restProps } = props;

  const { height, width } = useMemo(() => {
    switch (size) {
      case 'sm': {
        return {
          width: defaultTangleLogoSize.width * 0.5,
          height: defaultTangleLogoSize.height * 0.5,
        };
      }

      case 'md': {
        return {
          width: defaultTangleLogoSize.width,
          height: defaultTangleLogoSize.height,
        };
      }

      case 'lg': {
        return {
          width: defaultTangleLogoSize.width * 1.5,
          height: defaultTangleLogoSize.height * 1.5,
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
    path: (
      <>
        <g clipPath="url(#clip0_828_2896)">
          <path
            d="M32 21.9598C32.0014 20.3605 31.2756 18.8261 29.9818 17.6934C28.6881 16.5606 26.9321 15.9221 25.0994 15.918L17.4484 15.918C17.4003 15.2958 17.3699 14.6596 17.3699 14C17.3699 13.3404 17.3396 12.7073 17.2969 12.082L25.0994 12.082C26.9162 12.0566 28.6488 11.4089 29.9233 10.2788C31.1978 9.14863 31.9121 7.62659 31.9121 6.041C31.9121 4.45541 31.1978 2.93337 29.9233 1.80323C28.6488 0.67309 26.9162 0.0254409 25.0994 -3.01633e-07L6.81321 -1.10095e-06C4.9964 0.02544 3.26386 0.673089 1.98936 1.80323C0.714863 2.93337 0.000568195 4.45541 0.000568126 6.041C0.000568057 7.62659 0.714862 9.14863 1.98936 10.2788C3.26386 11.4089 4.9964 12.0566 6.81321 12.082L14 12.25C14.5 12.25 14.5427 13.3404 14.5427 14C14.5427 14.6596 14.573 15.2927 14.6158 15.918L6.81321 15.918C4.9964 15.9434 3.26386 16.5911 1.98936 17.7212C0.714862 18.8514 0.000567499 20.3734 0.00056743 21.959C0.000567361 23.5446 0.714862 25.0666 1.98936 26.1968C3.26386 27.3269 4.9964 27.9746 6.81321 28L25.0994 28C26.9318 27.9959 28.6875 27.3576 29.9812 26.2252C31.2749 25.0928 32.0009 23.5588 32 21.9598ZM29.1727 6.04022C29.1732 6.98405 28.7446 7.8895 27.981 8.5579C27.2173 9.22631 26.181 9.60308 25.0994 9.60556L16.9974 9.60555C16.7039 7.83811 16.1447 6.11213 15.3342 4.47222C14.9768 3.7617 14.5193 3.09283 13.9723 2.48111L25.0994 2.48111C26.1798 2.48358 27.215 2.8595 27.9785 3.52656C28.7419 4.19362 29.1713 5.09747 29.1727 6.04022ZM6.81321 9.60555C5.72959 9.60555 4.69036 9.22992 3.92412 8.56129C3.15789 7.89266 2.72742 6.98581 2.72742 6.04022C2.72742 5.09464 3.15789 4.18778 3.92412 3.51915C4.69036 2.85052 5.7296 2.47489 6.81321 2.47489L8.64754 2.47489C10.2679 2.47489 11.8028 3.59489 12.7583 5.47244C13.4124 6.7954 13.8776 8.18352 14.1434 9.60555L6.81321 9.60555ZM2.7399 21.9598C2.73943 21.0159 3.16802 20.1105 3.93166 19.4421C4.6953 18.7737 5.73161 18.3969 6.81321 18.3944L14.9153 18.3944C15.2088 20.1619 15.768 21.8879 16.5785 23.5278C16.9358 24.2383 17.3933 24.9072 17.9404 25.5189L6.81321 25.5189C5.73285 25.5164 4.69762 25.1405 3.93418 24.4734C3.17074 23.8064 2.74131 22.9025 2.7399 21.9598ZM19.1651 22.5276C18.511 21.2046 18.0458 19.8165 17.78 18.3944L25.0994 18.3944C26.1831 18.3944 27.2223 18.7701 27.9885 19.4387C28.7548 20.1073 29.1852 21.0142 29.1852 21.9598C29.1852 22.9054 28.7548 23.8122 27.9885 24.4809C27.2223 25.1495 26.1831 25.5251 25.0994 25.5251L23.2651 25.5251C21.6518 25.5251 20.117 24.4051 19.1651 22.5276Z"
            fill="url(#paint0_linear_828_2896)"
          />
          <path
            opacity="0.8"
            d="M32 6.04022C32.0014 7.63948 31.2756 9.17389 29.9818 10.3066C28.688 11.4394 26.9321 12.0779 25.0993 12.082L17.4481 12.082C17.4 12.7042 17.3697 13.3404 17.3697 14C17.3697 14.6596 17.3394 15.2927 17.2966 15.918L25.0993 15.918C26.9162 15.9434 28.6487 16.5911 29.9232 17.7212C31.1978 18.8514 31.9121 20.3734 31.9121 21.959C31.9121 23.5446 31.1978 25.0666 29.9232 26.1968C28.6487 27.3269 26.9162 27.9746 25.0993 28L6.81277 28C4.99592 27.9746 3.26335 27.3269 1.98883 26.1968C0.714308 25.0666 5.31303e-08 23.5446 7.20382e-08 21.959C9.09462e-08 20.3734 0.714308 18.8514 1.98883 17.7212C3.26335 16.5911 4.99592 15.9434 6.81277 15.918L13.9997 15.75C14.4997 15.75 14.5424 14.6596 14.5424 14C14.5424 13.3404 14.5727 12.7073 14.6155 12.082L6.81277 12.082C4.99592 12.0566 3.26335 11.4089 1.98883 10.2788C0.714308 9.14863 2.42951e-07 7.62659 2.61858e-07 6.041C2.80766e-07 4.45541 0.714308 2.93337 1.98883 1.80323C3.26335 0.673093 4.99592 0.0254399 6.81277 -3.00355e-07L25.0993 -8.22899e-08C26.9317 0.00411981 28.6875 0.642418 29.9812 1.77482C31.2749 2.90723 32.0009 4.44123 32 6.04022ZM29.1727 21.9598C29.1732 21.016 28.7446 20.1105 27.9809 19.4421C27.2173 18.7737 26.1809 18.3969 25.0993 18.3944L16.9971 18.3944C16.7036 20.1619 16.1444 21.8879 15.3339 23.5278C14.9765 24.2383 14.519 24.9072 13.9719 25.5189L25.0993 25.5189C26.1797 25.5164 27.2149 25.1405 27.9784 24.4734C28.7418 23.8064 29.1713 22.9025 29.1727 21.9598ZM6.81277 18.3944C5.72913 18.3944 4.68987 18.7701 3.92363 19.4387C3.15738 20.1073 2.7269 21.0142 2.7269 21.9598C2.7269 22.9054 3.15738 23.8122 3.92363 24.4808C4.68987 25.1495 5.72913 25.5251 6.81277 25.5251L8.64713 25.5251C10.2676 25.5251 11.8024 24.4051 12.7579 22.5276C13.412 21.2046 13.8772 19.8165 14.1431 18.3944L6.81277 18.3944ZM2.73939 6.04022C2.73891 6.98405 3.16751 7.8895 3.93117 8.55791C4.69482 9.22631 5.73115 9.60308 6.81277 9.60555L14.915 9.60555C15.2085 7.8381 15.7677 6.11213 16.5782 4.47222C16.9356 3.7617 17.3931 3.09283 17.9401 2.48111L6.81277 2.48111C5.73238 2.48358 4.69713 2.8595 3.93368 3.52656C3.17023 4.19362 2.7408 5.09747 2.73939 6.04022ZM19.1648 5.47244C18.5107 6.79541 18.0455 8.18352 17.7797 9.60555L25.0993 9.60555C26.183 9.60555 27.2222 9.22992 27.9885 8.56129C28.7547 7.89266 29.1852 6.98581 29.1852 6.04022C29.1852 5.09464 28.7547 4.18778 27.9885 3.51915C27.2222 2.85052 26.183 2.47489 25.0993 2.47489L23.265 2.47489C21.6516 2.47489 20.1168 3.59489 19.1648 5.47244Z"
            fill="url(#paint1_linear_828_2896)"
          />
        </g>
        <path d="M48.685 8.598V22.5H45.283V8.598H48.685ZM40.873 10.11V6.96H53.095V10.11H40.873ZM57.2788 22.773C56.1728 22.773 55.2908 22.472 54.6328 21.87C53.9888 21.254 53.6668 20.435 53.6668 19.413C53.6668 18.447 53.9958 17.677 54.6538 17.103C55.3258 16.529 56.2918 16.193 57.5518 16.095L60.4918 15.864V15.696C60.4918 15.346 60.4218 15.059 60.2818 14.835C60.1418 14.597 59.9388 14.422 59.6728 14.31C59.4208 14.184 59.0988 14.121 58.7068 14.121C58.0208 14.121 57.4958 14.247 57.1318 14.499C56.7818 14.751 56.6068 15.115 56.6068 15.591H53.9188C53.9188 14.793 54.1218 14.1 54.5278 13.512C54.9338 12.924 55.5078 12.469 56.2498 12.147C57.0058 11.825 57.8808 11.664 58.8748 11.664C59.8968 11.664 60.7578 11.846 61.4578 12.21C62.1718 12.574 62.7108 13.106 63.0748 13.806C63.4528 14.506 63.6418 15.36 63.6418 16.368V22.5H60.7858L60.5758 21.114C60.4078 21.59 60.0088 21.989 59.3788 22.311C58.7628 22.619 58.0628 22.773 57.2788 22.773ZM58.4128 20.379C59.0288 20.379 59.5328 20.232 59.9248 19.938C60.3168 19.63 60.5128 19.175 60.5128 18.573V18.006L58.8748 18.153C58.1748 18.209 57.6778 18.328 57.3838 18.51C57.1038 18.678 56.9638 18.93 56.9638 19.266C56.9638 19.644 57.0828 19.924 57.3208 20.106C57.5588 20.288 57.9228 20.379 58.4128 20.379ZM70.4553 22.5H67.2213V12H70.2663L70.4763 13.092C70.7983 12.644 71.2393 12.294 71.7993 12.042C72.3733 11.79 73.0033 11.664 73.6893 11.664C74.9353 11.664 75.9013 12.049 76.5873 12.819C77.2873 13.575 77.6373 14.639 77.6373 16.011V22.5H74.4033V16.788C74.4033 16.13 74.2353 15.605 73.8993 15.213C73.5633 14.807 73.1153 14.604 72.5553 14.604C71.9113 14.604 71.4003 14.8 71.0223 15.192C70.6443 15.57 70.4553 16.088 70.4553 16.746V22.5ZM80.6916 17.061C80.6916 15.997 80.9016 15.059 81.3216 14.247C81.7556 13.435 82.3506 12.798 83.1066 12.336C83.8766 11.874 84.7516 11.643 85.7316 11.643C86.5576 11.643 87.2646 11.811 87.8526 12.147C88.4547 12.483 88.8677 12.924 89.0917 13.47L88.7766 13.68L89.0286 12H92.0737V21.828C92.0737 23.074 91.8427 24.145 91.3807 25.041C90.9187 25.951 90.2606 26.644 89.4066 27.12C88.5527 27.61 87.5237 27.855 86.3197 27.855C84.7096 27.855 83.4006 27.421 82.3926 26.553C81.3846 25.699 80.8036 24.53 80.6496 23.046H83.9256C83.9536 23.634 84.1776 24.089 84.5976 24.411C85.0176 24.747 85.5846 24.915 86.2986 24.915C87.0826 24.915 87.6986 24.698 88.1466 24.264C88.6087 23.83 88.8397 23.242 88.8397 22.5V20.274L89.1967 20.547C88.9727 21.093 88.5387 21.534 87.8946 21.87C87.2506 22.206 86.5086 22.374 85.6686 22.374C84.6886 22.374 83.8206 22.15 83.0646 21.702C82.3226 21.254 81.7416 20.631 81.3216 19.833C80.9016 19.035 80.6916 18.111 80.6916 17.061ZM83.9466 16.977C83.9466 17.481 84.0516 17.929 84.2616 18.321C84.4716 18.699 84.7586 19 85.1226 19.224C85.4866 19.448 85.9066 19.56 86.3827 19.56C86.8726 19.56 87.2996 19.455 87.6636 19.245C88.0416 19.021 88.3286 18.72 88.5246 18.342C88.7347 17.95 88.8397 17.495 88.8397 16.977C88.8397 16.459 88.7347 16.018 88.5246 15.654C88.3286 15.276 88.0416 14.982 87.6636 14.772C87.2996 14.562 86.8656 14.457 86.3616 14.457C85.8856 14.457 85.4657 14.562 85.1016 14.772C84.7376 14.982 84.4506 15.276 84.2406 15.654C84.0446 16.032 83.9466 16.473 83.9466 16.977ZM98.9997 22.5H95.7657V6.666H98.9997V22.5ZM107.558 22.773C106.508 22.773 105.57 22.535 104.744 22.059C103.932 21.583 103.288 20.932 102.812 20.106C102.35 19.266 102.119 18.307 102.119 17.229C102.119 16.137 102.343 15.178 102.791 14.352C103.253 13.512 103.89 12.854 104.702 12.378C105.514 11.902 106.445 11.664 107.495 11.664C108.601 11.664 109.553 11.895 110.351 12.357C111.149 12.805 111.765 13.449 112.199 14.289C112.633 15.115 112.85 16.102 112.85 17.25V18.069L103.82 18.111L103.862 16.116H109.637C109.637 15.556 109.448 15.115 109.07 14.793C108.692 14.457 108.174 14.289 107.516 14.289C106.97 14.289 106.522 14.394 106.172 14.604C105.836 14.814 105.584 15.143 105.416 15.591C105.248 16.025 105.164 16.585 105.164 17.271C105.164 18.251 105.36 18.979 105.752 19.455C106.158 19.917 106.781 20.148 107.621 20.148C108.237 20.148 108.748 20.043 109.154 19.833C109.56 19.623 109.819 19.329 109.931 18.951H112.892C112.71 20.113 112.136 21.044 111.17 21.744C110.204 22.43 109 22.773 107.558 22.773Z" />
        <defs>
          <linearGradient
            id="paint0_linear_828_2896"
            x1="2.38462"
            y1="1.77333"
            x2="26.529"
            y2="29.367"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8E59FF" />
            <stop offset="1" stopColor="#6888F9" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_828_2896"
            x1="2.3841"
            y1="26.2267"
            x2="26.5285"
            y2="-1.36739"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8E59FF" />
            <stop offset="1" stopColor="#6888F9" />
          </linearGradient>
          <clipPath id="clip0_828_2896">
            <rect
              width="28"
              height="32"
              fill="white"
              transform="translate(32) rotate(90)"
            />
          </clipPath>
        </defs>
      </>
    ),
    displayName: 'TangleLogo',
    defaultProps: {
      width,
      height,
      fill: 'none',
      stroke: 'none',
    },
    viewBox: defaultTangleLogoSize.viewBox,
  });
};
