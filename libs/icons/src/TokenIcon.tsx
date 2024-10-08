'use client';

import cx from 'classnames';
import React, { MouseEventHandler, cloneElement, useMemo } from 'react';

import { Spinner } from './Spinner';
import { useDynamicSVGImport } from './useDynamicSVGImport';
import { TokenIconBase } from './types';
import { getIconSizeInPixel } from './utils';
import { twMerge } from 'tailwind-merge';

export const TokenIcon: React.FC<
  TokenIconBase & {
    isActive?: boolean;
    customLoadingCmp?: React.ReactNode;
  }
> = (props) => {
  const {
    className: classNameProp,
    isActive,
    name,
    onCompleted,
    onError,
    size = 'md',
    onClick,
    customLoadingCmp,
    ...restProps
  } = props;

  const { svgElement, error, loading } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });

  const className = useMemo(
    () =>
      twMerge(
        cx({
          'cursor-copy': Boolean(onClick),
          [cx(
            'fill-mono-60 stroke-mono-60',
            'dark:fill-mono-140 dark:stroke-mono-140',
          )]: typeof name === 'undefined', // Style for placeholder
        }),
        classNameProp,
      ),
    [classNameProp, name, onClick],
  );

  // Prevent infinite loop when the passed onClick not use useCallback
  const onClickRef = React.useRef<
    MouseEventHandler<SVGElement | HTMLDivElement> | undefined
  >(onClick);

  if (error) {
    return <span>{error.message}</span>;
  }

  if (loading) {
    return customLoadingCmp ?? <Spinner {...props} />;
  }

  if (svgElement) {
    const sizeInPx = getIconSizeInPixel(size);
    const props: React.SVGProps<SVGElement> = {
      className,
      width: parseInt(sizeInPx),
      height: parseInt(sizeInPx),
      onClick,
      ...restProps,
    };

    return isActive ? (
      <div className="relative" onClick={onClickRef.current}>
        {cloneElement(svgElement, props)}
        <span className="inline-block absolute w-1.5 h-1.5 bg-green-50 dark:bg-green-40 rounded-full top-0 right-0" />
      </div>
    ) : (
      cloneElement(svgElement, { ...props, onClick: onClickRef.current })
    );
  }

  return null;
};
