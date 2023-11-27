import React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const UseCase2SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  return (
    <svg
      width="48"
      height="52"
      viewBox="0 0 48 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M26.818 3.18198C28.5754 1.42462 31.4246 1.42462 33.182 3.18198L44.818 14.818C46.5754 16.5754 46.5754 19.4246 44.818 21.182L33.182 32.818C31.4246 34.5754 28.5754 34.5754 26.818 32.818L15.182 21.182C13.4246 19.4246 13.4246 16.5754 15.182 14.818L26.818 3.18198Z"
        fill="url(#paint0_linear_1881_3679)"
      />
      <path
        d="M16.5 23.4998C16.5 22.6714 15.8264 21.9912 15.0031 22.083C12.8626 22.3219 10.8026 23.0704 8.99981 24.275C6.77974 25.7584 5.04942 27.8668 4.02763 30.3336C3.00585 32.8004 2.7385 35.5148 3.2594 38.1335C3.78031 40.7523 5.06606 43.1577 6.95406 45.0457C8.84207 46.9338 11.2475 48.2195 13.8663 48.7404C16.485 49.2613 19.1994 48.994 21.6662 47.9722C24.133 46.9504 26.2414 45.2201 27.7248 43C28.9294 41.1972 29.678 39.1372 29.9168 36.9967C30.0086 36.1734 29.3284 35.4998 28.5 35.4998H18C17.1716 35.4998 16.5 34.8282 16.5 33.9998V23.4998Z"
        fill="#ECF4FF"
      />
      <path
        d="M31.5 32.4998C32.3284 32.4998 33.0086 31.8262 32.9168 31.0029C32.7763 29.7439 32.459 28.5085 31.9724 27.3336C31.2939 25.6957 30.2995 24.2074 29.0459 22.9539C27.7924 21.7003 26.3041 20.7059 24.6662 20.0274C23.4913 19.5407 22.2559 19.2235 20.9969 19.083C20.1736 18.9912 19.5 19.6714 19.5 20.4998V30.9998C19.5 31.8282 20.1716 32.4998 21 32.4998H31.5Z"
        fill="#624FBE"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1881_3679"
          x1="30"
          y1="0"
          x2="30"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const UseCase2Svg = forwardRef(UseCase2SvgComponent);
